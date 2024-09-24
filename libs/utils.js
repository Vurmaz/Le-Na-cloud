  const url = process.env.URL
  
  export const getAboutData = async() => {        
      const response = await fetch(`${url}/api/getAbout`, {
          method: 'GET',
      })
          return await response.json()           
  }

  export const getProjects = async() => {
    const response = await fetch(`${url}/api/getProjects`, {
      method:"GET",
    })
    return response.json()
  }

  export const getPrinciples = async() => {
      const response = await fetch(`${url}/api/getPrinciples`, {
          method:'GET'
      })
      return await response.json()
  }  

  export const getFaq = async() => {
    const response = await fetch(`${url}/api/getFaq`, {
      method:"GET",
    })
    return response.json()

  }  
  export const getProject = async(id) => {        
    const response = await fetch(`${url}/api/getProjects/${id}`, {
        method: 'GET',
    })
        return await response.json()                      
    }
       
  export const getService = async(servicename) => {    
    const response = await fetch(`${url}/api/getService/${servicename}`, {
      method:"GET",
    })
    return response.json()
  }

  export const getLogos = async() => {
    const response = await fetch(`${url}/api/getLogos`, {
        method:'GET',
    })
    return response.json()
  }  