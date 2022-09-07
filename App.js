import React, { useState } from "react";
const data = {
  form: {
    sections: [
      {
        order:1,
        section_title: "Basic information",

        fields: [
          {
            id:1,
            name: "Person_name",
            label: "Person_name",
            type: "string",
            html_element: "textbox"
          },
          {
            id:2,
            name: "Animal_name",
            label: "Animal_name",
            type: "string",
            html_element: "textbox"
          },
          {
            id:3,
            name: "Vehicle_name",
            label: "Vehicle_name",
            type: "string",
            html_element: "textbox"
          }
        ]
      }
    ]
  }
};
export default function App() {
 useState({
    Person_name: "",
    Animal_name: "",
    Vehicle_name: ""
  });
  const onSubmit = (e) => {
    const Person_name= e.target.Person_name.value;
    const Animal_name=e.target.Animal_name.value;
    const Vehicle_name=e.target.Vehicle_name.value;
    console.log(Person_name,Animal_name,Vehicle_name)
    e.preventDefault();
  }
    
  return (
    <div className="Container">
      <form className="outer-container" onSubmit={onSubmit}>
        {data.form.sections.map((formData) => {
          return (
            <div key={formData.order}>
              <h1>{formData.section_title}</h1>
              {formData.fields.map((inputData) => {
                return (
                  <div key={inputData.id}>
                    <label>{inputData.label}</label>
                    <input
                      type={inputData.html_element}
                      name={inputData.name}
                      datatype={inputData.type}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
        <button type="onSubmit">Submit</button>
      </form>
    </div>
  );
}