export async function listModel(query: any, variables: any) {
    const response = await fetch(`http://localhost:3000/api/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
      cache: 'no-store'
    });
  
    return await response.json();
  }
  
  export async function listFields({query, variables}:{query:string,variables:any}) {
    const response = await fetch(`http://localhost:3000/api/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
      cache: 'no-store'
    });
  
    return await response.json();
  }
  
  export async function createRecord({
    mutation,
    variables
  }: {
    mutation: string;
    variables: Record<string, any>;
  }) {
    const response = await fetch(`http://localhost:3000/api/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // You may need to include additional headers if required by your GraphQL server
      },
      body: JSON.stringify({ query: mutation, variables }),
      cache: 'no-store'
    });
  
    return await response.json();
  }

  export async function updateRecord({
    mutation,
    variables
  }: {
    mutation: string;
    variables: Record<string, any>;
  }) {
    const response = await fetch(`http://localhost:3000/api/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // You may need to include additional headers if required by your GraphQL server
      },
      body: JSON.stringify({ query: mutation, variables }),
      cache: 'no-store'
    });
  
    return await response.json();
  }