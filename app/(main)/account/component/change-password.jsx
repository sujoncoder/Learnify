"use client"

import { changePassword } from "@/app/actions/account"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

const ChangePassword = ({ email }) => {
    const [passwordState, setPasswordState] = useState({
        "oldPassword": "",
        "newPassword": ""
    })

    const handleChange = (event) => {
        const key = event.tarrget.name
        const value = event.tarrget.value
        setPasswordState({
            ...passwordState, [key]: value
        })
    }

    async function doPassowrdChange(event) {
        event.preventDefault();
        console.log(passwordState);

        try {
            await changePassword(email, passwordState?.oldPassword, passwordState?.newPassword);

            toast.success(`Password changed successfully.`)
        } catch (err) {
            console.error(err);
            toast.error(`Error: ${err.message}`)
        }
    }



    return (
        <div>
            <h5 className="text-lg font-semibold mb-4">
                Change password :
            </h5>
            <form onSubmit={doPassowrdChange}>
                <div className="grid grid-cols-1 gap-5">
                    <div>
                        <Label className="mb-2 block">Old password :</Label>
                        <Input
                            type="password"
                            placeholder="Old password"
                            name="oldPassword"
                            onChange={handleChange}
                            required=""
                        />
                    </div>
                    <div>
                        <Label className="mb-2 block">New password :</Label>
                        <Input
                            type="password"
                            placeholder="New password"
                            name="newPassword"
                            onChange={handleChange}
                            required=""
                        />
                    </div>
                    <div>
                        <Label className="mb-2 block">
                            Re-type New password :
                        </Label>
                        <Input
                            type="password"
                            placeholder="Re-type New password"
                            required=""
                        />
                    </div>
                </div>
                {/*end grid*/}
                <Button className="mt-5 cursor-pointer" type="submit">
                    Save password
                </Button>
            </form>
        </div>
    )
}

export default ChangePassword