import BlogHeader from "@/components/BlogHeader";

export default function MDXLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col">
            <BlogHeader />
            <div className="container mx-auto max-w-prose flex-1 py-10 prose">
                {children}
            </div>
        </main>
    )
}