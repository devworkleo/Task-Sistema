import { styled } from "styled-components"

export const Text = styled.span``
export const Title = styled.span``
export const Subtitle = styled.span``
export const NotFoundActions = styled.div``
export const NotFoundAction = styled.button``
export const TasksLayout = styled.div`
    gap: 20px;
    width: 100%;
    display: flex;
    max-width: 900px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`
export const NotFoundLayout = styled.div`
    gap: 10px;
    width: 90%;
    /* color: white; */
    display: flex;
    padding: 40px;
    min-height: 200px;
    align-items: center;
    border-radius: 10px;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.3);
    ${Title} {
        font-size: 1.3em;
        font-weight: 600;
        text-align: center;
    }
    ${Subtitle} {
        width: 100%;
        text-align: center;
    }
    ${NotFoundActions} {
        gap: 20px;
        width: 100%;
        display: flex;
        margin-top: 10px;
        align-items: center;
        justify-content: center;
        ${NotFoundAction} {
            gap: 10px;
            display: flex;
            color: white;
            cursor: pointer;
            font-weight: 600;
            border-radius: 5px;
            padding: 10px 20px;
            align-items: center;
            transition: .3s linear;
            justify-content: center;
            border: 1px solid #880808;
            background-color: #880808;
            /* border: 1px solid #0079FE;
            background-color: #0079FE; */
        }
        ${NotFoundAction}:last-child {
            color: white;
            transition: .3s linear;
            border: 1px solid #087442;
            background-color: #087442;
        }
        ${NotFoundAction}:first-child:hover {
            color: #880808;
            /* color: #0079FE; */
            background-color: transparent;
        }
        ${NotFoundAction}:last-child:hover {
            color: #087442;
            background-color: transparent;
        }
        @media (max-width: 460px) {
            gap: 10px;
            flex-direction: column;
            ${NotFoundAction} {
                width: 100%;
            }
        }
    }
`
export const RemoveAllTaskButton = styled.button``
export const CreateTaskButton = styled.button``
export const ExitButton = styled.button``
export const CreateOrRemoveTask = styled.div``
export const SearchTaskLayout = styled.div`
    gap: 10px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${CreateTaskButton} {
        gap: 10px;
        color: white;
        height: 50px;
        display: flex;
        cursor: pointer;
        font-size: 1em;
        font-weight: 600;
        padding: 0px 10px;
        border-radius: 5px;
        align-items: center;
        transition: .3s linear;
        justify-content: center;
        border: 1px solid #087442;
        background-color: #087442;
    }
    ${RemoveAllTaskButton} {
        gap: 10px;
        color: white;
        height: 50px;
        display: flex;
        cursor: pointer;
        font-size: 1em;
        font-weight: 600;
        padding: 0px 20px;
        border-radius: 5px;
        align-items: center;
        transition: .3s linear;
        justify-content: center;
        border: 1px solid #880808;
        background-color: #880808;
    }
    ${CreateOrRemoveTask} {
        gap: 10px;
        width: 100%;
        display: flex;
        max-width: 300px;
        align-items: center;
        justify-content: center;
    }
    @media (max-width: 767px) {
        ${CreateOrRemoveTask} {
            width: 130px;
        }
        ${CreateOrRemoveTask} ${CreateTaskButton} {
            width: auto;
            max-width: auto;
            padding: 0px 20px;
        }
        ${CreateTaskButton} ${Text}, ${RemoveAllTaskButton} ${Text}{
            display: none;
        }
    }
`
export const TaskDataHeaderAndAction = styled.div``
export const TaskDataTableHeader = styled.div``
export const TaskField = styled.span``
export const TaskDataAndAction = styled.div``
export const TasksData = styled.div``
export const ConfirmkAction = styled.button``
export const BackToPending = styled.button``
export const Actions = styled.div``
export const TrashAction = styled.button``
export const TrashOrConfirm = styled.div``
export const TaskDatableLayout = styled.div`
    gap: 20px;
    width: 90%;
    display: flex;
    flex-direction: column;
    ${TaskDataTableHeader} {
        gap: 10px;
        width: 100%;
        display: flex;
        padding: 10px 20px;
        align-items: center;
        border-radius: 5px;
        justify-content: center;
        background-color: #F9FBFC;
        /* border-radius: 10px 10px 0px 0px; */
        ${TaskField} {
            font-weight: 600;
        }
        ${TaskField}:nth-child(1) {
            width: 50%;
        }
        ${TaskField}:not(:nth-child(1) ){
            width: 16.6%;
        }
    }
    ${TaskDataHeaderAndAction} {
        gap: 10px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        ${Actions} {
            /* width: 136px; */
            font-weight: 600;
            padding: 10px 41px;
            align-items: center;
            border-radius: 5px;
            text-align: center;
            justify-content: center;
            background-color: #F9FBFC;
        }
    }
    ${TaskDataAndAction} {
        gap: 10px;
        width: 100%;
        display: flex;
        margin-top: -10px;
        align-items: center;
        justify-content: center;
        ${ConfirmkAction}, ${BackToPending}, ${TrashAction} {
            gap: 10px;
            height: 40px;
            color: white;
            display: flex;
            cursor: pointer;
            padding: 0px 20px;
            border-radius: 5px;
            align-items: center;
            transition: .3s linear;
            justify-content: center;
        }
        ${ConfirmkAction} {
            border: 1px solid #24a0ed;
            background-color: #24a0ed;
        }
        ${BackToPending} {
            border: 1px solid yellow;
            background-color: yellow;
        }
        ${TrashAction} {
            border: 1px solid #880808;
            background-color: #880808;
        }
    }
    ${TasksData} {
        gap: 10px;
        width: 100%;
        color: white;
        display: flex;
        border-radius: 5px;
        padding: 10px 20px;
        align-items: center;
        transition: .3s linear;
        justify-content: center;
        background-color: #1F2A48;
        ${TaskField}:nth-child(1) {
            width: 50%;
        }
        ${TaskField}:not(:nth-child(1) ){
            width: 16.6%;
        }
    }
    ${TasksData}:hover {
        cursor: default;
        transform: scale(1.01);
        box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.3);
    }
    ${TrashOrConfirm} {
        gap: 10px;
        display: flex;
        align-items: center;
        justify-content: center ;
    }
    @media (max-width: 470px) {
        ${TaskDataHeaderAndAction} {
            display: none;
        }
    }
    @media (max-width: 471px) and (max-width: 600px) {
        ${TasksData} {
            flex-direction: column;
        }
        ${TrashOrConfirm} {
            flex-direction: column;
            ${TrashAction}, ${ConfirmkAction}, ${BackToPending} {
                padding: 30px 20px !important;
            }
        }
    }
    @media (max-width: 767px) {
        ${Actions} {
            padding: 10px 0px;
        }
        ${TaskDataTableHeader} ${TaskField} {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        ${TaskField} {
            width: 100% !important;
        }
    }
`
export const CreateTaskCard =  styled.div``
export const CreateTaskHeader = styled.div``
export const CreateTaskForm = styled.div``
export const Exit = styled.button``
export const ExitOrCreateTask = styled.div``
export const CreateTaskLayout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.4);
    ${CreateTaskCard} {
        gap: 20px;
        width: 90%;
        display: flex;
        padding: 20px;
        max-width: 350px;
        /* min-height: 300px; */
        border-radius: 5px;
        align-items: center;
        flex-direction: column;
        background-color: white;
        box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.3);
    }
    ${CreateTaskHeader} {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        ${Title} {
            font-size: 1.3em;
            font-weight: 600;
            text-align: center;
        }
        ${Exit} {
            border: none;
            display: flex;
            cursor: pointer;
            padding: 5px 10px;
            align-items: center;
            justify-content: center;
            background-color: transparent;
        }
    }
    ${CreateTaskForm} {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        ${ExitOrCreateTask} {
            gap: 10px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            ${ExitButton}, ${CreateTaskButton} {
                gap: 10px;
                display: flex;
                cursor: pointer;
                padding: 10px 0px;
                border-radius: 5px;
                align-items: center;
                transition: .3s linear;
                justify-content: center;
            }
            ${ExitButton} {
                color: white;
                width: 20%;
                background-color: #880808;
                border: 1px solid #880808;
            }
            ${ExitButton}:hover {
                color: #880808;
                background-color: transparent;
            }
            ${CreateTaskButton} {
                color: white;
                width: 85%;
                background-color: #24a0ed;
                border: 1px solid #24a0ed;
            }
            ${CreateTaskButton}:hover {
                color: #24a0ed;
                background-color: transparent;
            }
        }
    }
`
export const Container = styled.div`
    gap: 20px;
    width: 100%;
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #141c2f;
`
// 242426