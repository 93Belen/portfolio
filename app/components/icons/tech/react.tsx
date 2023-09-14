"use client"
import { OverlayTrigger, Tooltip } from 'react-bootstrap';


export default function React(){
    return (
        <OverlayTrigger
        placement='top'
        delay={{ show: 250, hide: 400 }}
        overlay={<Tooltip id="button-tooltip-2"><p className='text-white bg-gray rounded-md p-1'>React</p></Tooltip>}
        >
        <svg className='lg:h-[70px] m-auto' width="auto" height="50px" viewBox="0 0 37 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.8115 23.2375C31.6157 23.6036 31.1315 23.9077 30.2106 24.0229C29.3058 24.1361 28.0939 24.0488 26.6451 23.7544C23.7541 23.1669 20.0346 21.7789 16.1835 19.7193C12.3325 17.6597 9.11296 15.3368 7.01931 13.2584C5.97011 12.2169 5.22471 11.2574 4.81648 10.442C4.40098 9.61213 4.38508 9.04054 4.58088 8.67442C4.77668 8.3083 5.26092 8.00419 6.18183 7.88903C7.08664 7.77587 8.2985 7.86315 9.74728 8.15754C12.6383 8.74498 16.3578 10.133 20.2089 12.1926C24.0599 14.2522 27.2794 16.5751 29.3731 18.6535C30.4223 19.6951 31.1677 20.6545 31.5759 21.4699C31.9914 22.2998 32.0073 22.8714 31.8115 23.2375Z" stroke="#5544DC"/>
        <path d="M1.60465 20.0656C1.6844 20.3708 2.06065 20.7344 3.03475 21.0069C3.96951 21.2683 5.29105 21.3961 6.92217 21.374C10.1764 21.3299 14.5484 20.6915 19.2591 19.4605C23.9698 18.2296 28.0952 16.6476 30.955 15.094C32.3885 14.3153 33.4785 13.5574 34.1659 12.8721C34.8822 12.1579 35.0324 11.6567 34.9527 11.3515C34.8729 11.0462 34.4967 10.6826 33.5226 10.4101C32.5878 10.1487 31.2663 10.0209 29.6352 10.043C26.3809 10.0871 22.0089 10.7255 17.2982 11.9565C12.5875 13.1874 8.46214 14.7695 5.6023 16.323C4.16887 17.1017 3.07879 17.8596 2.39143 18.545C1.67514 19.2591 1.52489 19.7603 1.60465 20.0656Z" stroke="#5544DC"/>
        <path d="M10.8416 30.6201C11.1182 30.7721 11.6216 30.7574 12.4408 30.2911C13.2313 29.8413 14.179 29.0445 15.2224 27.9395C17.3041 25.7349 19.6881 22.388 21.8685 18.4204C24.049 14.4528 25.5963 10.6461 26.3414 7.707C26.7149 6.23371 26.8795 5.00663 26.8355 4.09819C26.7899 3.15664 26.5325 2.72378 26.2559 2.57179C25.9793 2.41979 25.476 2.43455 24.6567 2.90079C23.8662 3.35065 22.9186 4.14736 21.8751 5.25245C19.7934 7.45702 17.4094 10.8039 15.229 14.7715C13.0485 18.7391 11.5012 22.5458 10.7561 25.4849C10.3826 26.9582 10.218 28.1853 10.262 29.0937C10.3076 30.0353 10.565 30.4681 10.8416 30.6201Z" stroke="#5544DC"/>
        <circle cx="18.8686" cy="16.0222" r="2.17553" fill="#FBF351"/>
        <path d="M8.14136 47.0996C8.14136 46.8652 8.11401 46.627 8.05933 46.3848C8.01245 46.1348 7.93433 45.8965 7.82495 45.6699C7.72339 45.4434 7.58276 45.2324 7.40308 45.0371C7.2312 44.8418 7.02417 44.6738 6.78198 44.5332C6.46948 44.6035 6.12573 44.627 5.75073 44.6035L5.64526 51.0371C5.63745 51.123 5.64917 51.2129 5.68042 51.3066C5.71948 51.3926 5.76636 51.4707 5.82104 51.541C5.88354 51.6113 5.95386 51.6699 6.03198 51.7168C6.11792 51.7637 6.20776 51.7871 6.30151 51.7871C6.41089 51.7871 6.52026 51.7832 6.62964 51.7754C6.74683 51.7598 6.86011 51.752 6.96948 51.752L6.99292 52.1621L3.14917 52.3613V51.9512L3.82886 51.9043C3.92261 51.8965 4.00854 51.8652 4.08667 51.8105C4.16479 51.748 4.2312 51.6777 4.28589 51.5996C4.34058 51.5215 4.37964 51.4355 4.40308 51.3418C4.43433 51.248 4.44995 51.1543 4.44995 51.0605L4.67261 36.9043C4.67261 36.6855 4.62573 36.5254 4.53198 36.4238C4.44604 36.3223 4.33276 36.2559 4.19214 36.2246C4.05933 36.1855 3.91089 36.1699 3.74683 36.1777C3.58276 36.1855 3.42651 36.1934 3.27808 36.2012V35.8027C3.68433 35.7871 4.09448 35.7715 4.50854 35.7559C4.93042 35.7324 5.35229 35.7207 5.77417 35.7207C6.46167 35.7207 7.03589 35.8145 7.49683 36.002C7.96558 36.1816 8.34058 36.4473 8.62183 36.7988C8.90308 37.1504 9.10229 37.5801 9.21948 38.0879C9.33667 38.5957 9.39526 39.1699 9.39526 39.8105C9.39526 40.2324 9.36401 40.6699 9.30151 41.123C9.24683 41.5684 9.14136 41.998 8.98511 42.4121C8.83667 42.8184 8.63354 43.1895 8.37573 43.5254C8.12573 43.8613 7.80151 44.127 7.40308 44.3223C7.76245 44.4707 8.06323 44.666 8.30542 44.9082C8.54761 45.1504 8.74292 45.4199 8.89136 45.7168C9.03979 46.0137 9.14526 46.3262 9.20776 46.6543C9.27026 46.9824 9.30151 47.3066 9.30151 47.627C9.30151 48.377 9.27026 49.123 9.20776 49.8652C9.15308 50.5996 9.12573 51.3418 9.12573 52.0918C9.12573 52.7793 9.2937 53.3535 9.62964 53.8145C9.97339 54.2754 10.4968 54.5723 11.2 54.7051V54.9512C11.1375 54.9512 11.075 54.9551 11.0125 54.9629C10.9578 54.9707 10.907 54.9746 10.8601 54.9746C10.4304 54.9746 10.0359 54.8965 9.67651 54.7402C9.32495 54.5918 9.02026 54.3809 8.76245 54.1074C8.50464 53.8418 8.30542 53.5293 8.16479 53.1699C8.02417 52.8105 7.95386 52.4199 7.95386 51.998C7.95386 51.1777 7.98511 50.3613 8.04761 49.5488C8.11011 48.7363 8.14136 47.9199 8.14136 47.0996ZM5.75073 44.2168C6.25854 44.1855 6.67261 44.0605 6.99292 43.8418C7.31323 43.623 7.56323 43.3496 7.74292 43.0215C7.93042 42.6855 8.05542 42.3066 8.11792 41.8848C8.18823 41.4629 8.22339 41.0332 8.22339 40.5957C8.22339 40.2988 8.22339 39.9863 8.22339 39.6582C8.2312 39.3301 8.21948 39.0059 8.18823 38.6855C8.16479 38.3652 8.11011 38.0605 8.02417 37.7715C7.94604 37.4746 7.82104 37.2168 7.64917 36.998C7.48511 36.7715 7.26636 36.5957 6.99292 36.4707C6.71948 36.3379 6.37573 36.2754 5.96167 36.2832H5.86792L5.75073 44.2168ZM12.9343 44.1934C13.2859 44.1934 13.571 44.2012 13.7898 44.2168C14.0164 44.2246 14.1882 44.1973 14.3054 44.1348C14.4226 44.0723 14.4968 43.9551 14.5281 43.7832C14.5671 43.6113 14.5828 43.3418 14.575 42.9746H14.9734V46.1387H14.575V45.2246C14.575 45.1621 14.5632 45.0918 14.5398 45.0137C14.5242 44.9355 14.4968 44.8652 14.4578 44.8027C14.4187 44.7324 14.3718 44.6738 14.3171 44.627C14.2625 44.5801 14.196 44.5566 14.1179 44.5566L12.9343 44.5801L13.0632 49.2559C13.3054 49.2559 13.5398 49.2559 13.7664 49.2559C13.9929 49.2559 14.2195 49.248 14.446 49.2324C14.5945 49.2246 14.7351 49.1816 14.8679 49.1035C15.0085 49.0254 15.1296 48.9277 15.2312 48.8105C15.3406 48.6934 15.4265 48.5645 15.489 48.4238C15.5515 48.2754 15.5828 48.1309 15.5828 47.9902L15.6062 46.3379H16.0164L15.9812 49.6191C15.0828 49.6348 14.1804 49.6582 13.2742 49.6895C12.3679 49.7129 11.4656 49.7363 10.5671 49.7598L10.5437 49.3379C10.7468 49.3379 10.9265 49.3379 11.0828 49.3379C11.2468 49.3301 11.3835 49.2988 11.4929 49.2441C11.6023 49.1895 11.6843 49.0996 11.739 48.9746C11.8015 48.8496 11.8328 48.666 11.8328 48.4238V48.3535L11.6687 40.7949C11.6609 40.5527 11.6257 40.3613 11.5632 40.2207C11.5007 40.0723 11.4109 39.9629 11.2937 39.8926C11.1843 39.8223 11.0437 39.7793 10.8718 39.7637C10.7078 39.748 10.5164 39.7441 10.2976 39.752L10.2742 39.3535L15.7234 39.2012L15.7468 42.541H15.3367L15.3132 40.7949C15.3132 40.4902 15.2468 40.2246 15.114 39.998C14.989 39.7715 14.7507 39.6582 14.3992 39.6582C14.1335 39.6582 13.8718 39.6621 13.614 39.6699C13.364 39.6777 13.1062 39.6816 12.8406 39.6816L12.9343 44.1934ZM20.7039 49.6191C20.6101 49.7832 20.4851 49.9355 20.3289 50.0762C20.1726 50.2168 20.0046 50.3418 19.825 50.4512C19.6453 50.5605 19.4578 50.6465 19.2625 50.709C19.0671 50.7715 18.8835 50.8027 18.7117 50.8027C18.446 50.8027 18.2156 50.748 18.0203 50.6387C17.825 50.5215 17.6609 50.373 17.5281 50.1934C17.3953 50.0059 17.2937 49.7988 17.2234 49.5723C17.1609 49.3379 17.1296 49.0996 17.1296 48.8574C17.1296 48.4043 17.2273 48.0059 17.4226 47.6621C17.6179 47.3105 17.8601 46.9902 18.1492 46.7012C18.4382 46.4121 18.7546 46.1348 19.0984 45.8691C19.4421 45.6035 19.7585 45.3184 20.0476 45.0137C20.3367 44.709 20.5789 44.373 20.7742 44.0059C20.9695 43.6387 21.0671 43.2051 21.0671 42.7051C21.075 42.4629 21.0515 42.209 20.9968 41.9434C20.9421 41.6777 20.8445 41.4355 20.7039 41.2168C20.571 40.9902 20.3992 40.8066 20.1882 40.666C19.9773 40.5254 19.7273 40.4551 19.4382 40.4551C19.1257 40.4551 18.8679 40.5293 18.6648 40.6777C18.4695 40.8262 18.3132 41.0176 18.196 41.252C18.0789 41.4785 17.9968 41.7363 17.95 42.0254C17.9109 42.3066 17.8914 42.584 17.8914 42.8574C17.8914 42.9668 17.8992 43.1035 17.9148 43.2676C17.9304 43.4316 17.9578 43.5918 17.9968 43.748C18.0359 43.8965 18.0867 44.0254 18.1492 44.1348C18.2195 44.2441 18.3054 44.2988 18.407 44.2988C18.5164 44.2988 18.6023 44.2637 18.6648 44.1934C18.7351 44.123 18.7859 44.041 18.8171 43.9473C18.8562 43.8457 18.8757 43.7402 18.8757 43.6309C18.8835 43.5215 18.8835 43.4238 18.8757 43.3379L19.2859 43.3145C19.2937 43.4941 19.282 43.6699 19.2507 43.8418C19.2273 44.0059 19.1804 44.1543 19.1101 44.2871C19.0398 44.4199 18.946 44.5254 18.8289 44.6035C18.7117 44.6816 18.571 44.7207 18.407 44.7207C18.1804 44.7207 17.989 44.6582 17.8328 44.5332C17.6843 44.4004 17.5671 44.2402 17.4812 44.0527C17.3953 43.8574 17.3328 43.6504 17.2937 43.4316C17.2625 43.2129 17.2468 43.0137 17.2468 42.834C17.2468 42.4824 17.2937 42.1387 17.3875 41.8027C17.4812 41.4668 17.6218 41.166 17.8093 40.9004C17.9968 40.627 18.2351 40.4082 18.5242 40.2441C18.8132 40.0801 19.157 39.998 19.5554 39.998C20.0554 39.998 20.4695 40.1191 20.7976 40.3613C21.1257 40.6035 21.3875 40.9121 21.5828 41.2871C21.7781 41.6543 21.9148 42.0566 21.9929 42.4941C22.0789 42.9238 22.1218 43.3301 22.1218 43.7129C22.1218 44.7051 22.0867 45.6934 22.0164 46.6777C21.946 47.6543 21.9109 48.6426 21.9109 49.6426C21.9109 49.8613 21.9382 50.0293 21.9929 50.1465C22.0476 50.2559 22.1257 50.334 22.2273 50.3809C22.3289 50.4277 22.45 50.4551 22.5906 50.4629C22.739 50.4707 22.9031 50.4785 23.0828 50.4863V50.8965C22.6687 50.8809 22.2585 50.8691 21.8523 50.8613C21.4539 50.8457 21.0554 50.8262 20.657 50.8027L20.7039 49.6191ZM19.3562 50.0527C19.4656 50.0527 19.5828 50.0254 19.7078 49.9707C19.8406 49.9082 19.9695 49.8262 20.0945 49.7246C20.2195 49.6152 20.3367 49.4941 20.446 49.3613C20.5632 49.2207 20.6648 49.0684 20.7507 48.9043L20.9734 44.6738C20.7468 44.9863 20.4812 45.2988 20.1765 45.6113C19.8796 45.916 19.5945 46.2285 19.321 46.5488C19.0554 46.8691 18.825 47.2012 18.6296 47.5449C18.4421 47.8887 18.3484 48.252 18.3484 48.6348C18.3484 48.7754 18.3679 48.9316 18.407 49.1035C18.446 49.2676 18.5046 49.4199 18.5828 49.5605C18.6687 49.7012 18.7742 49.8184 18.8992 49.9121C19.032 50.0059 19.1843 50.0527 19.3562 50.0527ZM28.4968 44.5566H28.0867V43.0918C28.0867 42.8496 28.0593 42.5684 28.0046 42.248C27.95 41.9277 27.8601 41.623 27.7351 41.334C27.6101 41.0449 27.4382 40.8027 27.2195 40.6074C27.0085 40.4121 26.7468 40.3145 26.4343 40.3145C26.0671 40.3145 25.782 40.416 25.5789 40.6191C25.3835 40.8145 25.239 41.1426 25.1453 41.6035C25.0593 42.0566 25.0085 42.6621 24.9929 43.4199C24.9773 44.1699 24.9695 45.0996 24.9695 46.209C24.9695 46.3887 24.9656 46.6426 24.9578 46.9707C24.9578 47.291 24.9656 47.6426 24.9812 48.0254C25.0046 48.4082 25.0398 48.7988 25.0867 49.1973C25.1414 49.5957 25.2195 49.959 25.321 50.2871C25.4304 50.6152 25.571 50.8848 25.7429 51.0957C25.9226 51.2988 26.1453 51.4004 26.4109 51.4004C26.6453 51.4004 26.8484 51.3496 27.0203 51.248C27.2 51.1387 27.3523 50.998 27.4773 50.8262C27.6023 50.6543 27.7039 50.4629 27.782 50.252C27.8679 50.0332 27.9304 49.8105 27.9695 49.584C28.0164 49.3574 28.0437 49.1387 28.0515 48.9277C28.0671 48.709 28.071 48.5176 28.0632 48.3535H28.4734C28.4734 48.7285 28.4382 49.123 28.3679 49.5371C28.3054 49.9434 28.1882 50.3184 28.0164 50.6621C27.8445 51.0059 27.614 51.291 27.325 51.5176C27.0359 51.7441 26.6648 51.8574 26.2117 51.8574C25.7976 51.8574 25.446 51.752 25.157 51.541C24.8757 51.3223 24.6414 51.041 24.4539 50.6973C24.2664 50.3535 24.1218 49.9668 24.0203 49.5371C23.9265 49.1074 23.8562 48.6777 23.8093 48.248C23.7625 47.8184 23.7351 47.4082 23.7273 47.0176C23.7195 46.627 23.7156 46.3027 23.7156 46.0449C23.7156 45.5059 23.7195 44.9746 23.7273 44.4512C23.7351 43.9277 23.7625 43.4355 23.8093 42.9746C23.8562 42.5059 23.9265 42.0723 24.0203 41.6738C24.1218 41.2754 24.2625 40.9355 24.4421 40.6543C24.6296 40.3652 24.864 40.1387 25.1453 39.9746C25.4265 39.8105 25.7742 39.7285 26.1882 39.7285C26.6335 39.7285 27.0164 39.8535 27.3367 40.1035C27.6648 40.3535 27.9148 40.6777 28.0867 41.0762V38.6738H28.4968V44.5566ZM31.8015 40.3379H34.321V40.7363H32.9031C32.739 40.7363 32.5867 40.7832 32.446 40.877C32.3132 40.9629 32.2 41.0762 32.1062 41.2168C32.0125 41.3574 31.9382 41.5098 31.8835 41.6738C31.8367 41.8379 31.8093 41.9902 31.8015 42.1309L31.7546 50.8027C31.7546 50.998 31.7585 51.2285 31.7664 51.4941C31.782 51.7598 31.825 52.0137 31.8953 52.2559C31.9656 52.498 32.075 52.7012 32.2234 52.8652C32.3718 53.0371 32.5828 53.123 32.8562 53.123C33.0437 53.123 33.196 53.0762 33.3132 52.9824C33.4304 52.8887 33.5203 52.7715 33.5828 52.6309C33.6531 52.4902 33.7 52.3379 33.7234 52.1738C33.7468 52.0098 33.7546 51.8535 33.7468 51.7051L34.1804 51.8105C34.1804 52.1855 34.1296 52.4941 34.0281 52.7363C33.9343 52.9863 33.8093 53.1816 33.6531 53.3223C33.5046 53.4629 33.3328 53.5605 33.1375 53.6152C32.9421 53.6699 32.7468 53.6973 32.5515 53.6973C32.1687 53.6973 31.8484 53.5996 31.5906 53.4043C31.3406 53.209 31.1414 52.9629 30.9929 52.666C30.8445 52.377 30.739 52.0566 30.6765 51.7051C30.614 51.3535 30.5828 51.0254 30.5828 50.7207L30.6296 40.7363H29.1414V40.3379H30.6296L30.6531 37.4551L31.825 36.4473L31.8015 40.3379Z" fill="white"/>
        </svg>
        </OverlayTrigger>
    )
}