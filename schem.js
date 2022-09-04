import React from "react"

const data={
    "form":{
        "sections":[
            {
                "section_title":"Form Field from JSON schema",
                "fields":[
            {      
              "type": "string",
              "title": "Person_name"
            },
            {
              "type": "string",
              "title": "Animal_name"
            },
            {
              "type": "string",
              "title": "vehicle_name"
            }
                        ]
                    }
                ]
            }
        
    }

export default function schem(){
    return(
        <div>
            <form>
                {
                    data.form.sections.map(FormData =>{
                        return(
                            <div>
                                <h1>{FormData.section_title}</h1>
                                {
                                    FormData.fields.map(inputData =>{
                                        return(
                                            <div>
                                                <input type={inputData.type} title={inputData.title}/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </form>
        </div>
    )
}