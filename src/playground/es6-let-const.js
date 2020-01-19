const multiplier = {
    numbers: [2, 4, 6],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => {
            return this.multiplyBy * number
        })
    }
}


console.log(multiplier.multiply())


    const template = {
      title: 'Old man and the sea',
      year: 1900,
      age: 18,
      subtitle: 'Just some guy and a boat',
      location: 'New York',
      chapters: ['Chapter One', 'Chapter Two', 'Chapter Three']
    }

      getLocation = (location) => {
    if (location) {
      return <p>Location: {location}</p>
    } else {
      return 'There is no location listed'
    }
  }

    <div>
    <h1>{template.title ? template.title : 'There is no title'}</h1>
    <p>{template.subtitle}</p>
        { template.age >= 18 && <p>age: {template.age}</p> }
        { template.year >= 1900 && <p> year: {template.year}</p> }
        { this.getLocation(template.location) }
<p>{template.chapters.length > 0 ? 'Here are your options' : 'There are no chapters'}</p>
    <ol>
        <li>{template.chapters[0]}</li>
        <li>{template.chapters[1]}</li>
        <li>{template.chapters[2]}</li>
    </ol>
      </div>