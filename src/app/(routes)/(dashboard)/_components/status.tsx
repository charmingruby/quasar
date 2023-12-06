export interface StatusProps {
  status: string
}

export function Status({ status }: StatusProps) {
  return (
    <div
      className={`
      ${
        status === 'Aguardando'
          ? 'bg-orange-200'
          : status === 'Pago'
            ? 'bg-emerald-200'
            : 'bg-red-200'
      }
      px-3 w-fit py-1 flex items-center gap-1 rounded-sm shadow-sm`}
    >
      <div
        className={`${
          status === 'Aguardando'
            ? 'bg-orange-600'
            : status === 'Pago'
              ? 'bg-emerald-700'
              : 'bg-red-600'
        }
        
        h-1.5 w-1.5 rounded-full 
        `}
      />
      <small
        className={` ${
          status === 'Aguardando'
            ? 'text-orange-600'
            : status === 'Pago'
              ? 'text-emerald-700'
              : 'text-red-600'
        }
        font-medium
        `}
      >
        {status}
      </small>
    </div>
  )
}
