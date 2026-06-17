import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TaskForm from '../components/TaskForm'

describe('TaskForm', () => {
  test('submits typed task and clears input', async () => {
    const user = userEvent.setup()
    const onAddTask = vi.fn()

    render(<TaskForm onAddTask={onAddTask} />)

    const input = screen.getByLabelText('Task name')
    await user.type(input, 'Write first test')
    await user.click(screen.getByRole('button', { name: 'Add Task' }))

    expect(onAddTask).toHaveBeenCalledWith('Write first test')
    expect(input).toHaveValue('')
  })

  test('does not submit empty input', async () => {
    const user = userEvent.setup()
    const onAddTask = vi.fn()

    render(<TaskForm onAddTask={onAddTask} />)

    await user.click(screen.getByRole('button', { name: 'Add Task' }))

    expect(onAddTask).not.toHaveBeenCalled()
  })
})
