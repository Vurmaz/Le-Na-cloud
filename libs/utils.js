  const url = process.env.SITE_URL
  
  export const getAboutData = async() => {        
    try{
      const response = await fetch(`${url}/api/getAbout`, {
          method: 'GET',
      })        
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();        
        return { data:data.data };
      } else {        
        const text = await response.text();
        console.error('Non-JSON response:', text);
        return { data: [] }
      }
    }
    catch(err){
      console.error('Error fetching projects:', error);
      return { data: [] }
    }                 
  }

  export const getProjects = async() => {
    try{
      const response = await fetch(`${url}/api/getProjects`, {
        method:"GET",
      })  
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        return { data:data.data };
      } else {        
        const text = await response.text();
        console.error('Non-JSON response:', text)
        return { data: [] }
      }
    }
    catch(err){
      console.error('Error fetching projects:', error);
      return { data: [] }; // Return fallback data on error
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
      const contentType = response.headers.get('content-type');
      console.log(contentType)
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        return { data:data.data };
      } else {        
        const text = await response.text();
        console.error('Non-JSON response:', text);
        return { data: [] }
      }
    }
    catch(err){
      console.error('Error fetching projects:', error);
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
      const contentType = response.headers.get('content-type');      
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();        
        return { data:data.data };
      } else {
        
        const text = await response.text();
        console.error('Non-JSON response:', text);
        return { data: [] }
      }
    }
    catch(err){
      console.error('Error fetching projects:', error);
      return { data: [] }
    }    
  }  

  export const getProject = async(id) => {        
    try{
      const response = await fetch(`${url}/api/getProjects/${id}`, {
          method: 'GET',
      })     
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        return { data:data.data };
      } else {        
        const text = await response.text();
        console.error('Non-JSON response:', text);
        return { data: [] };
      }
    }
    catch(err){
      console.error('Error fetching projects:', error);
      return { data: [] };
    }                    
    }
       
  export const getService = async(servicename) => {    
    try{
      const response = await fetch(`${url}/api/getService/${servicename}`, {
        method:"GET",
      })
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        return { data:data.data };
      } else {        
        const text = await response.text();
        console.error('Non-JSON response:', text);
        return { data: [] }
      }
    }
    catch(err){
      console.error('Error fetching projects:', error);
      return { data: [] }; // Return fallback data on error
    }
  }

  export const getLogos = async() => {
    try{
      const response = await fetch(`${url}/api/getLogos`, {
          method:'GET',
      })
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        return { data:data.data };
      } else {       
        const text = await response.text();
        console.error('Non-JSON response:', text);
        return { data: [] }
      }
    }
    catch(err){
      console.error('Error fetching projects:', error)
      return { data: [] }
    }
  }  