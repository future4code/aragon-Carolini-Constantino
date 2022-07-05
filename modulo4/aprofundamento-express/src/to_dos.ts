export type ToDos = {
    userId: number,
    id: number,
    title: string,
    completed?: boolean
}

export let to_dos:ToDos[] = [
    {
        "userId": 1,
        "id": 1,
        "title": "illo expedita consequatur quia in",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
      },
      {
        "userId": 2,
        "id": 3,
        "title": "suscipit repellat esse quibusdam voluptatem incidunt",
        "completed": false
      },
      {
        "userId": 2,
        "id": 4,
        "title": "distinctio vitae autem nihil ut molestias quo",
        "completed": true
      },
      {
        "userId": 3,
        "id": 5,
        "title": "rerum perferendis error quia ut eveniet",
        "completed": false
      },
      {
        "userId": 3,
        "id": 6,
        "title": "tempore ut sint quis recusandae",
        "completed": true
      }
    ]