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
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
