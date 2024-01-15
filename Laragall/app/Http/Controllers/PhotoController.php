<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Photo;

class PhotoController extends Controller
{
    public function index()
    {
        $photos = Photo::all();

        return response()->json(['photos' => $photos]);
    }

    public function show($id)
    {
        $photo = Photo::findOrFail($id);

        return response()->json(['photo' => $photo]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'nullable',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $imagePath = $request->file('image')->store('photos', 'public');

        $photo = Photo::create([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'image_path' => $imagePath,
        ]);

        return response()->json(['photo' => $photo, 'message' => 'Photo uploaded successfully']);
    }

    public function update(Request $request, $id)
    {
        $photo = Photo::findOrFail($id);

        $request->validate([
            'title' => 'required',
            'description' => 'nullable',
        ]);

        $photo->update([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
        ]);

        return response()->json(['photo' => $photo, 'message' => 'Photo updated successfully']);
    }

    public function destroy($id)
    {
        $photo = Photo::findOrFail($id);
        $photo->delete();

        return response()->json(['message' => 'Photo deleted successfully']);
    }
}
