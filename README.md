# Обновление состояние, зависящее от предыдущего состояния

- setState принемает функцию
- аргумент - текущий state
  `this.setState((state) => { return { count: state.count =+ 1 } })`
