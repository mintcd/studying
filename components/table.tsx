import { useState } from 'react'

export default function Table(props: { id: number }) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-1/2 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Name
            </th>
            <td className="px-6 py-4">
              stochastic process
            </td>
          </tr>

        </tbody>
      </table>
    </div>

  )
}
