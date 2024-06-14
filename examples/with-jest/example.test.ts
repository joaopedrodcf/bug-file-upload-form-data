it('respects File in request body when invalid.csv', async () => {
    const file = new File(['a,b,c\n1,2,3'], 'invalid.csv', {
        type: 'text/csv',
    });
  
    const formData = new FormData()
    formData.set('file', file)
  
    const response = await fetch('https://api.example.com/upload-csv-file', {
      method: 'POST',
      body: formData,
    })
  
    expect(response.status).toBe(400)
    expect(await response.json()).toEqual({
      message: 'Invalid csv',
    })
  })
  
  