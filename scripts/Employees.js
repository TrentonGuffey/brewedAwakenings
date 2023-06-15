import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")
            let fulfilledOrders = 0

            for (const order of orders) {
                if (order.employeeId === parseInt(employeeId)) {
                    fulfilledOrders++

                }
            }

            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    window.alert(`${employee.name} has sold ${fulfilledOrders} products.`)
                }

            }
        }
    }
)


export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

