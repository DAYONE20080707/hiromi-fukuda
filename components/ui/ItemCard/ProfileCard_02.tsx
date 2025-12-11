// components/ui/itemCard/ProfileCard_02.tsx

import React from "react"

interface ProfileCard_02Props {
  label?: string
  value: string | React.ReactNode
}

const ProfileCard_02 = ({ label, value }: ProfileCard_02Props) => {
  return (
    <dl className=" border-b border-[#d9d9d9] flex gap-4 pb-4">
      {label && (
        <dt className="text-base font-medium ![line-height:160%]">{label}</dt>
      )}
      <dd className="text-base font-medium ![line-height:160%]">{value}</dd>
    </dl>
  )
}

export default ProfileCard_02
