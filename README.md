# nextjs-blog-website

A responsive blog website that is designed to adapt and display content optimally on all devices, including desktop computers, tablets, and mobile devices. With a responsive design, the website layout, images, and text automatically adjust to fit the screen size of the device used to view the website.

This development project can be broken down into several key steps:

- Planning and content creation
- Design and development using NextJS.
- Test the blog and see it viewers can easily access it.
- Launch the website if everything works fine.

## Rendering Markdown as JSX

- npm install react-markdown

This package takes markdown and outputs it as JSX

## Adding Markdown Files As A Data Source in 'posts' folder

Since this blog is owned by us, where we write our blog posts, we better use our file system as a data source.
We only use them to load blog posts, users can't interact with them to change them.

## Adding functions to read & fetch data from Markdown files

- npm install gray-matter

This package allows us to read a markdown file and split it into metadata and the actual markdown content.

## Rendering code Snippets From Markdown

- npm install react-syntax-highlighter

This package allows us to render code snippets from Markdown file. It makes highlighting code very simple.
