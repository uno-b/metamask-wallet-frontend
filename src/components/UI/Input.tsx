import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { BsFillCircleFill } from 'react-icons/bs';

enum State {
  IDLE,
  VALID,
  INVALID,
  LOADING,
}

type InputType = {
  placeholder: string;
  value: string | number;
  onChange: (e: any) => void;
  id?: string;
  type?: string;
  state?: State;
  sign?: string;
  className?: string;
  autoFocus?: boolean;
};

const Input = ({
  id,
  placeholder,
  value,
  onChange,
  type = 'text',
  state = State.IDLE,
  autoFocus = false,
  className,
}: InputType) => {
  return (
    <div className='bg-gray-200 px-4 h-14 flex justify-center items-center relative w-full'>
      <div className='flex w-full'>
        <input
          id={id}
          autoComplete={'false'}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoFocus={autoFocus}
          className={`outline-none w-full text-md bg-transparent text-black ${className}`}
        />
      </div>

      {/* Right top placeholder */}
      <div className='absolute w-fit text-sm top-2 right-2 overflow-hidden'>
        <span
          className={`text-gray-400 block transition-all ${
            typeof value === 'string'
              ? value.length > 0
                ? 'translate-y-0 opacity-100'
                : 'translate-y-full opacity-0'
              : typeof value === 'number' &&
                (value
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-full opacity-0')
          }`}
        >
          {placeholder}
        </span>
      </div>

      {/* Input validation */}
      {state !== State.IDLE && (
        <div className='absolute w-fit text-sm right-8 bottom-2'>
          {state === State.VALID && (
            <AiOutlineCheck
              className='text-xxl font-semibold text-green-500'
              size={18}
            />
          )}

          {state === State.INVALID && (
            <AiOutlineClose
              className='text-xxl font-semibold text-red-500'
              size={16}
            />
          )}

          {state === State.LOADING && (
            <div className='animate-pulse flex space-x-4'>
              <div className='rounded-full bg-green-500 h-4 w-4'></div>
            </div>
            // <BsFillCircleFill className='text-xl font-semibold' />
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
