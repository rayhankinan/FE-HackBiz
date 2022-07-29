import { Avatar, Image, Button } from 'antd';
import React from 'react';
import { StandardLayout } from '../../../layout/StandardLayout'
import { UserContext } from '../../../context'

export const Edit: React.FC = () => {
    return (
        <StandardLayout >
            {/* Icon profile */}
            <div className="flex items-center">
                <ul className='flex flex-row'>
                    <li>
                        <img src="../../../src/resources/guest_user.png" className="ml-11 mt-10 h-14" alt="Guest User Profile" />
                    </li>
                    <li>
                        <Button
                            size="small"
                            style={{ margin: '0 16px', verticalAlign: 'middle', marginTop: 56, paddingLeft: 7 }}
                            onClick={() => navigate('./edit')}
                        >
                            Edit Profile
                        </Button>
                    </li>
                </ul>
            </div>
            {/* Data profile */}
        </StandardLayout>
    )
}