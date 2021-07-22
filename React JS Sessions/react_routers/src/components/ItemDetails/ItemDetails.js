// import React from "react";
// import courses from "../../data.json";


// export default function ItemDetails(props) {
//   console.log(props.match.params.id);
//   const courseId = props.match.params.id;
//   const course = courses.find(c => c.id === courseId);
//   console.log(course);
//   return (
//     <div>
//       {course.author}
//     </div>
//   )
// }



import React from "react";
import courses from "../../data.json";
import "./ItemDetails.css";

const ItemDetails = props => {
  const course = courses.find(c => c.id === props.match.params.id);

  return (
    <div className="item__details">
      <div className="course__img--container-d">
        <img
          src={course.courseImage}
          alt={course.title}
          className="course__img-d"
        />
      </div>

      

      <div className="item__details--content">
        <h4 className="course__title-d">{course.title}</h4>
        <p className='course__desc-d'>{course.desc}</p>
        <span className="course__author-d">By: {course.author}</span>
        <span className="course__price-d">{course.price}$</span>
        <span
          className={course.isHot ? "course__status-d hot-d" : "course__status-d"}
        >
          {course.isHot ? "Hot" : null}
        </span>
        <div className="catigories-d">
          {course.catigories.map((cat, index) => {
            return (
              <span key={index} className="cat-d">
                {cat}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
