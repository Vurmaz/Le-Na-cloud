  const url = process.env.SITE_URL
  
  export const getAboutData = async() => {        
    try{
      const response = await fetch(`${url}/api/getAbout`, {
          method: 'GET',
      })  
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        return { data };
      } else {
        // If it's not JSON, log the response text (probably an HTML error page)
        const text = await response.text();
        console.error('Non-JSON response:', text);
        return { data: [] }; // Return an empty data array or handle gracefully
      }
    }
    catch(err){
      console.error('Error fetching projects:', error);
      return { data: [] }; // Return fallback data on error
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
        return { data };
      } else {
        // If it's not JSON, log the response text (probably an HTML error page)
        const text = await response.text();
        console.error('Non-JSON response:', text);
        return { data: [] }; // Return an empty data array or handle gracefully
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
          method:'GET'
      }) 
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        return { data };
      } else {
        // If it's not JSON, log the response text (probably an HTML error page)
        const text = await response.text();
        console.error('Non-JSON response:', text);
        return { data: [] }; // Return an empty data array or handle gracefully
      }
    }
    catch(err){
      console.error('Error fetching projects:', error);
      return { data: [] }; // Return fallback data on error
    }      
  }  

  export const getFaq = async() => {
    try{
      const response = await fetch(`${url}/api/getFaq`, {
        method:"GET",
      })
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        return { data };
      } else {
        // If it's not JSON, log the response text (probably an HTML error page)
        const text = await response.text();
        console.error('Non-JSON response:', text);
        return { data: [] }; // Return an empty data array or handle gracefully
      }
    }
    catch(err){
      console.error('Error fetching projects:', error);
      return { data: [] }; // Return fallback data on error
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
        return { data };
      } else {
        // If it's not JSON, log the response text (probably an HTML error page)
        const text = await response.text();
        console.error('Non-JSON response:', text);
        return { data: [] }; // Return an empty data array or handle gracefully
      }
    }
    catch(err){
      console.error('Error fetching projects:', error);
      return { data: [] }; // Return fallback data on error
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
        return { data };
      } else {
        // If it's not JSON, log the response text (probably an HTML error page)
        const text = await response.text();
        console.error('Non-JSON response:', text);
        return { data: [] }; // Return an empty data array or handle gracefully
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
        return { data };
      } else {
        // If it's not JSON, log the response text (probably an HTML error page)
        const text = await response.text();
        console.error('Non-JSON response:', text);
        return { data: [] }; // Return an empty data array or handle gracefully
      }
    }
    catch(err){
      console.error('Error fetching projects:', error);
      return { data: [] }; // Return fallback data on error
    }
  }  