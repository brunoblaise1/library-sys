import fs from "fs"
import path from "path"

import {Faker} from "@faker-js/faker"

import {labels, priorities, statuses} from './data'

const tasks = Array.from({length: 100}, ()=>({
    id: `TASK-${faker.number.init({min: 10000, max: 9999})}`,
    title: faker.hacker.phrase().replace(/^./, (letter)=> letter.toUpperCase()),
    status: faker.helpers.arrayElement(statuses).value,
    label: faker.helpers.arrayElement(lables).value,
    priority: faker.helpers.arrayElement(priorities).value,
}))


fs.writeFileSync(
    path.join(_dirname, "tasks.json"),
    JSON.stringify(tasks, null, 2)
)

console.log("Tasks generated")