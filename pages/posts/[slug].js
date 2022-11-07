import { GraphQLClient, gql } from "graphql-request";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
const graphcms = new GraphQLClient(
  " https://api-ap-south-1.graphcms.com/v2/cl4waj9dx268s01unefao1zg5/master "
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      datePublished
      slug
      author {
        id
        name
        avatar {
          url
        }
      }
      content {
        html
      }
      coverPhoto {
        id
        url
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths(){
  const{posts}=await graphcms.request(SLUGLIST);
  return{
    paths:posts.map((post)=>({params:{slug:post.slug}})),
    fallback:false,
}
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}
export default function BlogPost({ post }) {
  return (
    
      <main >
        <div className="max-w-7xl mx-auto">
          
       
      <NavBar/>
        <img className="w-full h-72 object-cover" src={post.coverPhoto.url} alt="" />
        <div className="max-w-3xl mx-auto p-5">
        <h1 className=" lg:text-3xl mt-10 ">{post.title}</h1>
       
          <div  className="flex items-center space-x-2 mt-10">
<img className="h-10 w-10 rounded-full shadow-lg" src={post.author.avatar.url} alt="" />
  <p className="font-extralight text-sm">posted by <span className="text-blue-400 font-bold">{post.author.name}</span> - Published at {post.datePublished}</p>
  </div>
<div className="text-xl font-light mt-5 space-y-10" dangerouslySetInnerHTML={{__html: post.content.html }}></div>
</div>
<div>

</div>
</div>
<Footer/>
      </main>

  );
}
