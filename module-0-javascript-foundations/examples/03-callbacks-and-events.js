// 03: Callbacks, conditionals, and an event-like object.

function runWithMessage(message, callback) {
  const cleanMessage = message.trim()
  if (!cleanMessage) {
    console.log('Message was empty, callback not run.')
    return
  }

  callback(cleanMessage)
}

const handleSubmit = (text) => {
  console.log('Submitted text:', text)
}

runWithMessage('  Learn callbacks  ', handleSubmit)
runWithMessage('   ', handleSubmit)

const fakeInputEvent = {
  target: {
    value: 'Typed from input element'
  }
}

function handleChange(event) {
  console.log('Event target value:', event.target.value)
}

handleChange(fakeInputEvent)
