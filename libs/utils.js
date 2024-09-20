    export const getAboutData = async() => {        
        const response = await fetch(`http://localhost:3000/api/getAbout`, { cache:'no-cache' }, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            }
        })
            return await response.json()           
    }

  export const getProjects = async() => {
    const response = await fetch(`http://localhost:3000/api/getProjects`, { cache:'no-store' }, {
      method:"GET",
    })
    return response.json()
  }

  export const getPrinciples = async() => {
      const response = await fetch('http://localhost:3000/api/getPrinciples', { cache:'no-cache' }, {
          method:'GET'
      })
      return await response.json()
  }  

  export const getFaq = async() => {
    const response = await fetch(`http://localhost:3000/api/getFaq`, {
      method:"GET",
    })
    return response.json()

  }  
  export const getProject = async(id) => {        
    const response = await fetch(`http://localhost:3000/api/getProjects/${id}`, { cache:'no-cache' }, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        }
    })
        return await response.json()                      
    }
       
  export const getService = async(servicename) => {    
    const response = await fetch(`http://localhost:3000/api/getService/${servicename}`, {
      method:"GET",
    })
    return response.json()

  }