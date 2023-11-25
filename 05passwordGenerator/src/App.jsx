import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberallowed, setNumberAllowed] = useState(false)
  const [charallowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) str += "01234566789"
    if (charallowed) str += "{}[]~!@#$%^&*()+=|`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberallowed, charallowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => { passwordGenerator() }, [length, numberallowed, charallowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg text-center p-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='my-2 text-center text-white'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden my-2'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPasswordToClipboard}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberallowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charallowed}
              id='charInput'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
