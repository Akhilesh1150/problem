import React, { useState } from "react"

const data={
    "form":{
        "sections":[
            {
                "section_title":"Form Field from JSON schema",
                "fields":[
            {      
              "type": "string",
              "title": "Person_name",
              "value":""
            },
            {
              "type": "string",
              "title": "Animal_name",
              "value":""
            },
            {
              "type": "string",
              "title": "vehicle_name",
              "value":""
            }
                        ]
                    }
                ]
            }
        
    }

export default function schem(){
    const url=""
    const [data,setData]=useState({
        Person_name:"e.target.Person_name.value",
        Animal_name:"e.target.Animal_name.value",
        vehicle_name:"e.target.vehicle_name.value"
    })
    const onSubmit=(e)=>{
        console.log(data);
            e.preventDefault();
            
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                {
                    data.form.sections.map(FormData =>{
                        return(
                            <div>
                                <h1>{FormData.section_title}</h1>
                                {
                                    FormData.fields.map(inputData =>{
                                        return(
                                            <div>
                                                <input type={inputData.type} title={inputData.title} value={inputData.value}/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
                <button type="onSubmit">Submit</button>
            </form>
        </div>
    )
}
