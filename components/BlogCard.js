import Link from "next/link";

export default function BlogCard({
  title,
  author,
  coverPhoto,
  datePublished,
  slug,
}) {
  return (
    <div className="">
      <Link href={"/posts/" + slug}>
      <div className="border rounded-lg overflow-hidden group cursor-pointer">
       <img className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" src={coverPhoto.url} alt={title} />
       <div className="flex justify-between p-5 bg-white items-center ">

       <p className="text-lg font-bold p-5">{title}</p>
        <p className="text-sm"> by {author.name}</p>
        {/* <img className="h-12 w-12 rounded-full" src={author.avatar.url} alt="" /> */}
       </div>
      </div>
      </Link>

    </div>
  );
}
