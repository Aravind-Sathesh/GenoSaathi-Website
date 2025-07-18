import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL,
	process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function GET(request, { params }) {
	const { slug } = params;

	if (!slug) {
		return NextResponse.json(
			{ error: 'Slug is required' },
			{ status: 400 }
		);
	}

	try {
		const { data, error } = await supabase
			.from('blogs')
			.select('*')
			.eq('slug', slug)
			.single();

		if (error) {
			return NextResponse.json(
				{ error: 'Blog post not found' },
				{ status: 404 }
			);
		}

		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
