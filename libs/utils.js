  const url = process.env.SITE_URL
  
  export const getAboutData = async() => {        
    try{
      const response = await fetch(`${url}/api/getAbout`, {
          method: 'GET',
      })        
      return await response.json();        
    }
    catch(err){
      console.error('Error fetching projects:', err);
      return { data: [] }
    }                 
  }

  export const getProjects = async() => {
    try{
      const response = await fetch(`${url}/api/getProjects`, {
        method:"GET",
      })  
      return await response.json()
    }
    catch(err){
      console.error('Error fetching projects:', err)
      return { data: [] }
    }  
  }

  export const getPrinciples = async() => {
    try{
      const response = await fetch(`${url}/api/getPrinciples`, {
          method:'GET',
          headers:{
            "Content-Type": "application/json",
          }          
      }) 
      return await response.json()
    }
    catch(err){
      console.error('Error fetching projects:', err)
      return { data: [] }
    }      
  }  

  export const getFaq = async() => {
    try{
      const response = await fetch(`${url}/api/getFaq`, {
        method:"GET",
        headers:{
           "Content-Type": "application/json",
        }
      })
        return await response.json();                
    }
    catch(err){
      console.error('Error fetching projects:', err);
      return { data: [] }
    }    
  }  

  export const getProject = async(id) => {        
    try{
      const response = await fetch(`${url}/api/getProjects/${id}`, {
          method: 'GET',
      })     
        return await response.json();       
    }
    catch(err){
      console.error('Error fetching projects:', err)
      return { data: [] }
    }                    
    }
       
  export const getService = async(servicename) => {    
    try{
      const response = await fetch(`${url}/api/getService/${servicename}`, {
        method:"GET",
      })
      return await response.json()
    }
    catch(err){
      console.error('Error fetching projects:', err)
      return { data: [] }
    }
  }

  export const getLogos = async() => {
    try{
      const response = await fetch(`${url}/api/getLogos`, {
          method:'GET',
      })
      return await response.json();
    }
    catch(err){
      console.error('Error fetching projects:', err)
      return { data: [] }
    }
  }  