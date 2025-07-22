import BlogCard from './BlogCard';
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.jpg';

const Blogs = () => (
  <section id="blogs" className="w-full max-w-6xl mx-auto mt-16 mb-4 px-2">
    <h2 className="text-3xl md:text-4xl font-bold text-pink-400 flex items-center gap-2 justify-center mb-8">
      Latest Blogs <span className="text-pink-300">🌸</span>
    </h2>
    <div className="grid md:grid-cols-2 gap-8">
      <BlogCard
        image={blog1}
        title="How to Avoid a $500 AWS Bill by Accident"
        description="Learn how to prevent surprise AWS bills by setting up billing alerts and budgets in just 5 minutes. Essential for any cloud developer."
        link="https://medium.com/@aakansha0/identity-and-access-management-in-aws-6182c04864f6"
      />
      <BlogCard
        image={blog2}
        title="Identity and Access Management in AWS"
        description="Learn to securely manage cloud access with IAM users, groups, roles, and policies. Essential for controlling permissions at scale."
        link="https://medium.com/@aakansha0/identity-and-access-management-in-aws-6182c04864f6"
      />
    </div>
  </section>
);

export default Blogs; 