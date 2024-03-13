import { v4 as uuid } from 'uuid'

interface Collection<T> {
  preInsert(callback: (data: T) => void, arg: boolean): void
}

export const preInsert = function <
  TCollection extends Collection<TData>,
  TData extends {
    id: string
  },
>(colection: TCollection, extraFn?: (data: TData) => void) {
  colection.preInsert(function (data: TData) {
    data.id = uuid()
    extraFn && extraFn(data)
  }, true)
}
