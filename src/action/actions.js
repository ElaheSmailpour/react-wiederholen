
 export const NAME_HINZUFUEGEN="NAME_HINZUFUEGEN"
 export const PLUS="plus"
 export const MINUS="MINUS"
 export const ADDBUTTON="ADDBUTTON"
 export const ADD="ADD"
 export const ADDRESSEHINZUFÜGEN="ADDRESSEHINZUFÜGEN"

 export const actionadd=()=>{
     return{
         type:ADD
     }
 }
 export const actionzahlhochrechnen=()=>{
     return {
        type: PLUS
     }
 }

 export const actionzahlabziehen=()=>{
     return{
         type:MINUS
     }
 }
 export const actionADDRESSEHINZUFÜGEN=(addresse)=>({type:ADDRESSEHINZUFÜGEN,payload:addresse})
 export const actionnameHinzufuegen=(data)=>({type: NAME_HINZUFUEGEN,payload:data})


 export const actionaddbutton=(data)=>({type:ADDBUTTON,payload:data})

