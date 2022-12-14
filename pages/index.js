import Head from "next/dist/shared/lib/head";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "../components/BlogCard";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import JobCard from "../components/JobCard";

const graphcms = new GraphQLClient(
  " https://api-ap-south-1.graphcms.com/v2/cl4waj9dx268s01unefao1zg5/master "
);

const QUERY = gql`
{
  posts{
    id,
    title,
datePublished,
    slug,
    content{
      html
    }
    author{
      name,
      avatar{
        url
      }
      }
      coverPhoto{
        url
    }
  }
}
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default function Home({ posts }) {
  return (
    <div >
      <div className="max-w-7xl mx-auto ">

    
      <Head>
        <title>CodingLit🔥</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <NavBar/>
        <Banner/>
        <div className="text-3xl mt-5 space-x-5 pl-5">

        <h1>Top Articles</h1>
        
        </div>
      <main className="pt-5  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map((post) => (
          <BlogCard
            title={post.title}
            key={post.id}
            author={post.author}
            coverPhoto={post.coverPhoto}
            datePublished={post.datePublished}
            slug={post.slug}
          />
        ))}
      </main>
      
      <div className="text-3xl mt-5 space-x-5 pl-5">

{/* <h1>Apply For Jobs!</h1> */}

</div>
      {/* <div className="pt-5 mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        <JobCard/>
      </div> */}
      </div>
      <Footer/>
    </div>
  );
}
