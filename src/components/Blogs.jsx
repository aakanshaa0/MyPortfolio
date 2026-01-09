import { useState } from 'react';
import BlogCard from './BlogCard';
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.jpg';
import textToSpeech from '../assets/TextToSpeech.webp';
import imageLabeling from '../assets/ImageLabelling.webp';
import { FiChevronDown, FiExternalLink } from 'react-icons/fi';

const Blogs = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="blogs" className="w-full max-w-6xl mx-auto mt-16 mb-4 px-2">
      <h2 className="text-3xl md:text-4xl font-bold text-pink-400 flex items-center gap-2 justify-center mb-8">
        Latest Blogs <span className="text-pink-300">🌸</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <BlogCard
          image={textToSpeech}
          title="Serverless Text-to-Speech with AWS"
          description="A serverless Image-to-Audio System that converts images with text into audio files automatically using AWS S3, Lambda, Textract, and Polly."
          link="https://medium.com/@aakansha0/serverless-text-to-speech-with-aws-da06538fd3cb"
        />
        <BlogCard
          image={blog2}
          title="How to Avoid a $500 AWS Bill by Accident"
          description="Learn how to prevent surprise AWS bills by setting up billing alerts and budgets in just 5 minutes. Essential for any cloud developer."
          link="https://medium.com/@aakansha0/how-to-avoid-a-500-aws-bill-by-accident-4be584b13d88"
        />
        {showAll && (
          <>
            <BlogCard
              image={imageLabeling}
              title="Serverless Image Labeling with AWS"
              description="A serverless Image Labeling System that analyzes images, detects labels using AWS Rekognition, stores results in DynamoDB, and sends notifications via SNS."
              link="https://medium.com/@aakansha0/serverless-image-labeling-with-aws-d74d334f90e7"
            />
            <BlogCard
              image={blog1}
              title="Identity and Access Management in AWS"
              description="Learn to securely manage cloud access with IAM users, groups, roles, and policies. Essential for controlling permissions at scale."
              link="https://medium.com/@aakansha0/identity-and-access-management-in-aws-6182c04864f6"
            />
          </>
        )}
      </div>
      <div className="flex justify-center mt-8">
        {showAll ? (
          <a
            href="https://medium.com/@aakansha0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-pink-400 hover:text-pink-300 font-medium transition cursor-pointer"
          >
            <span>See More on Medium</span>
            <FiExternalLink />
          </a>
        ) : (
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 text-pink-400 hover:text-pink-300 font-medium transition cursor-pointer"
          >
            <span>See More</span>
            <FiChevronDown />
          </button>
        )}
      </div>
    </section>
  );
};

export default Blogs; 