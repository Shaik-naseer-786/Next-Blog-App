import connectDB from "@/lib/config/db";
import BlogModel from "@/lib/model/BlogModel";
import { writeFile } from 'fs/promises';
import { NextResponse } from "next/server";

// Ensure database connection is established
const loadDB = async () => {
    await connectDB();
};

export async function GET(request) {
    console.log("GET request received");
    return NextResponse.json({ msg: 'API working' });
}

export async function POST(request) {
    try {
        // Connect to the database
        await loadDB();

        const formData = await request.formData();
        const timeStamp = Date.now();
        const image = formData.get('image');
        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);
        const path = `./public/${timeStamp}_${image.name}`;
        await writeFile(path, buffer);
        const imageUrl = `/${timeStamp}_${image.name}`;

        const blogData = {
            title: `${formData.get('title')}`,
            description: `${formData.get('description')}`,
            category: `${formData.get('category')}`,
            author: `${formData.get('author')}`,
            image: `${imageUrl}`,
            authorImage: `${formData.get('authorImage')}`
        };

        await BlogModel.create(blogData);
        console.log("Blog saved!");
        return NextResponse.json({ success: true, msg: "Blog Added!" });
    } catch (error) {
        console.error("Error saving blog:", error);
        return NextResponse.json({ success: false, msg: "Error adding blog", error: error.message });
    }
}
