<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductFormRequest;
use App\Models\Product;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('products/index', [
            'data' => Product::latest()->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('products/product-form', [
            'mode' => 'create',
            'product' => null,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductFormRequest $request): RedirectResponse
    {
        try {
            $attributes = $request->safe()->except('featured_image');

            if ($request->hasFile('featured_image')) {
                $file = $request->file('featured_image');
                $attributes['featured_image'] = $file->store('products', 'public');
                $attributes['featured_image_original_name'] = $file->getClientOriginalName();
            }

            $product = Product::create($attributes);

            if ($product) {
                Inertia::flash('toast', ['type' => 'success', 'message' => __('Product created.')]);

                return to_route('products.index');
            }

            return back();
        } catch (Exception $e) {
            Log::error('Product creation failed: ' . $e->getMessage());
            return back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return Inertia::render('products/product-form', [
            'mode' => 'view',
            'product' => $product
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        return Inertia::render('products/product-form', [
            'mode' => 'edit',
            'product' => $product
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductFormRequest $request, Product $product)
    {
        if ($product) {
            $product->name = $request->name;
            $product->description = $request->description;
            $product->price = $request->price;

            if ($request->hasFile('featured_image')) {
                $file = $request->file('featured_image');
                $attributes['featured_image'] = $file->store('products', 'public');
                $attributes['featured_image_original_name'] = $file->getClientOriginalName();
                $product->featured_image = $attributes['featured_image'];
                $product->featured_image_original_name = $attributes['featured_image_original_name'];
            }

            $product->save();

            Inertia::flash('toast', ['type' => 'success', 'message' => __('Product updated.')]);

            return to_route('products.index');
        } else {
            Inertia::flash('toast', ['type' => 'error', 'message' => __('Unable to update product. Please try again!')]);
            return back();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        if ($product) {
            $product->delete();

            Inertia::flash('toast', ['type' => 'success', 'message' => __('Product deleted.')]);

            return to_route('products.index');
        } else {
            Inertia::flash('toast', ['type' => 'error', 'message' => __('Unable to delete product. Please try again!')]);
            return back();
        }
    }
}
