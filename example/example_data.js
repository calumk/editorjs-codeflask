let example_data = {
	blocks: [
		{
			type: "header",
			data: {
				text: "Example : @calumk/editorjs-codeflask ",
				level: 3,
			},
		},
		{
			type: "paragraph",
			data: {
				text: "This is an example of using EditorJs, with the @calumk/editorjs-codeflask package",
			},
		},
		{
			type: "delimiter",
		},
		{
			type: "code",
			data: {
				code: "// example\n// This is an example of codeflask!\n",
				language: "javascript",
			},
		},
		{
			type: "code",
			data: {
				code: "// example\n%Q0.0 := TRUE;\n",
				language: "iecst",
				showlinenumbers: false,
			},
		},
		{
			type: "code",
			data: {
				code: "// minimal example \n// This is an example of codeflask with only the code setting\n",
			},
		},
	],
};
