import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL,
	process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request) {
	const { password, postData } = await request.json();

	if (password !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD_FOR_CLIENT) {
		return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	}

	try {
		const { data, error } = await supabase
			.from('blogs')
			.insert([postData])
			.select()
			.single();

		if (error) throw error;
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}

export async function PUT(request) {
	const { password, postId, postData } = await request.json();

	if (password !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD_FOR_CLIENT) {
		return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	}

	if (!postId) {
		return NextResponse.json(
			{ error: 'Post ID is required for updates' },
			{ status: 400 }
		);
	}

	try {
		const { data, error } = await supabase
			.from('blogs')
			.update(postData)
			.eq('id', postId)
			.select()
			.single();

		if (error) throw error;
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
