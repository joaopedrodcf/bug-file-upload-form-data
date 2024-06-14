import { http, HttpResponse } from 'msw'

export const handlers = [
  http.post(
    'https://api.example.com/upload-csv-file',
    async ({ request }) => {
        const formData = await request.formData();
        const file = formData.get('orderFile');

        if (file instanceof File && file.name === 'invalid.csv') {
            return HttpResponse.json({
                message: 'Invalid csv',
            }, {
                status: 400,
            });
        }

        return HttpResponse.json({
            message: 'Success',
        }, {
            status: 201,
        });
    }
),
]
