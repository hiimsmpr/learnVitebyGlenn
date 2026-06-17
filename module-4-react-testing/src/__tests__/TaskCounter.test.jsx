import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TaskCounter from '../components/TaskCounter'

describe('TaskCounter', () => {
  test('shows initial count as 0', () => {
    render(<TaskCounter />)

    expect(screen.getByLabelText('task-count')).toHaveTextContent('Current count: 0')
  })

  test('increments count when Increase is clicked', async () => {
    const user = userEvent.setup()
    render(<TaskCounter />)

    await user.click(screen.getByRole('button', { name: 'Increase' }))

    expect(screen.getByLabelText('task-count')).toHaveTextContent('Current count: 1')
  })

  test('resets count when Reset is clicked', async () => {
    const user = userEvent.setup()
    render(<TaskCounter />)

    await user.click(screen.getByRole('button', { name: 'Increase' }))
    await user.click(screen.getByRole('button', { name: 'Reset' }))

    expect(screen.getByLabelText('task-count')).toHaveTextContent('Current count: 0')
  })
})
