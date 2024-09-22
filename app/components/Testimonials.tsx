import testimonial1 from "../assets/testimonials/testimonial1.png";
import testimonial2 from "../assets/testimonials/testimonial2.png";
import testimonial3 from "../assets/testimonials/testimonial3.png";
import zipee from "../assets/testimonials/zipee.png";
import company3 from "../assets/testimonials/company3.png";
import increase from "../assets/icons/increase.png";
import { useState } from "react";

export default function Testimonials() {
    const testimonials = [
        {
          id: 1,
          name: "Madhav Kasturia",
          title: "Founder & CEO, Zippee",
          company: zipee,
          image: testimonial1, // Replace with actual image URL
          feedback: "57% Reduction",
          reason: "in Customer Complaints",
          description:
            "The detailed training with Chaabi has led to great business impacts. We’ve seen a rise in product adaptation amongst riders leading to an increase in customer satisfaction.",
        },
        {
          id: 2,
          name: "Jane Doe",
          title: "COO, CompanyX",
          company: zipee,
    
          image: testimonial2, // Replace with actual image URL
          feedback: "45% Increase",
          reason: " in Employee Engagement",
          description:
            "The detailed training with chaabi has led to great business impacts. We’ve seen a rise in product adaptation amongst riders leading to an increase in customer satisfaction.",
        },
        {
          id: 3,
          name: "John Smith",
          title: "CTO, TechCorp",
          company: company3,
    
          image: testimonial3, // Replace with actual image URL
          feedback: "30% Faster ",
          reason: "Project Delivery",
          description:
            "The detailed training with chaabi has led to great business impacts. We’ve seen a rise in product adaptation amongst riders leading to an increase in customer satisfaction.",
        },
      ];
    
      const [activeTestimonial, setActiveTestimonial] = useState(1);
    
      const handleClick = (id: number) => {
        setActiveTestimonial(id);
      };
  return (
    <div className="relative flex justify-center items-center p-2 space-y-6 my-[100px] h-[250px]">
    {/* Container for all testimonials */}
    <div className="relative w-[80%] h-full flex justify-center items-center">
      {testimonials.map((testimonial, index) => {
        // Determine if the testimonial is active
        const isActive = activeTestimonial === testimonial.id;

        return (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
          <div
            key={testimonial.id}
            onClick={() => handleClick(testimonial.id)}
            className={`absolute w-full h-full flex items-center transition-all duration-500 cursor-pointer
        ${isActive ? "z-20 scale-100" : "z-10 scale-100"} 
        opacity-100
      `}
            style={{
              transform: isActive
                ? "translateX(50px)"
                : index === (activeTestimonial + 1) % testimonials.length
                ? "translateX(-10px)"
                : "translateX(-50px)",
            }}>
            <div
              className="relative flex items-center w-full rounded-full shadow-lg p-8"
              style={{
                background:
                  index === 0
                    ? "linear-gradient(99.48deg, #EFCD8A 7.75%, #FAE7A6 87.6%), linear-gradient(0deg, rgba(65, 65, 65, 0.13), rgba(65, 65, 65, 0.13))"
                    : index === 1
                    ? "linear-gradient(99.48deg, #97B2E8 7.75%, #CDCCFF 87.4%), linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))"
                    : index === 2
                    ? "linear-gradient(99.48deg, #8BD0CB 7.75%, #77DA9C 87.4%), linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))"
                    : "none",
              }}>
              {/* Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="object-cover w-100 h-full"
              />

              {/* Content */}
              <div className="ml-8 space-y-8">
                <img
                  src={testimonial.company}
                  alt={testimonial.name}
                  className="object-cover  w-1/4"
                />
                <div className="flex gap-4 mb-5">
                  <img src={increase} alt="Increase" />
                  <div>
                    <p className="font-nunito font-[700] italic text-3xl leading-[25.37px] hanging-[last]">
                      {testimonial.feedback}
                    </p>
                    <p className="font-nunito mt-2 font-semibold italic text-[19.93px] leading-[25.37px] hanging-punctuation-[last]">
                      {testimonial.reason}
                    </p>
                  </div>
                </div>
                <p className="font-nunito font-semibold italic text-[19.93px] leading-[25.37px] text-left">
                  {testimonial.description}
                </p>

                <p className="font-nunito font-normal italic text-[18.12px] leading-[23.56px] text-left border-t-2 border-black w-max pt-8">
                  {testimonial.name}
                  <br /> {testimonial.title}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  );
}


