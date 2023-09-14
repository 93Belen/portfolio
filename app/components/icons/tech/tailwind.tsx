"use client"
import { OverlayTrigger, Tooltip } from 'react-bootstrap';


export default function Tailwind(){
    return (
        <OverlayTrigger
        placement='top'
        delay={{ show: 250, hide: 400 }}
        overlay={<Tooltip id="button-tooltip-2"><p className='text-white bg-gray rounded-md p-1'>Tailwind CSS</p></Tooltip>}
        >
        <svg className='lg:h-[70px] m-auto' width="auto" height="50px" viewBox="0 0 72 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.95776 17.5044C21.3218 6.30668 33.8551 36.914 54.7422 14.57C36.8801 25.6658 28.4755 -2.95653 3.95776 17.5044Z" fill="#5544DC"/>
        <path d="M11.9768 8.07765C29.3408 -3.12008 41.8741 27.4872 62.7612 5.14327C44.8992 16.239 36.4946 -12.3833 11.9768 8.07765Z" fill="#5544DC"/>
        <path d="M15.6259 12.411C32.7728 1.92138 45.2529 30.6721 65.8788 9.741" stroke="#FBF351" stroke-linecap="round"/>
        <path d="M15.6339 12.2206C39.8451 -6.94656 48.4148 19.9923 66.0535 9.5982" stroke="#FBF351" stroke-linecap="round"/>
        <path d="M7.6186 21.7909C24.7654 11.3013 37.2456 40.052 57.8715 19.1209" stroke="#FBF351" stroke-linecap="round"/>
        <path d="M7.6266 21.6005C31.8377 2.43332 40.4075 29.3722 58.0462 18.9781" stroke="#FBF351" stroke-linecap="round"/>
        <path d="M5.03345 37.1602V51.8906C5.03345 51.9688 5.04907 52.0586 5.08032 52.1602C5.11157 52.2539 5.15454 52.3438 5.20923 52.4297C5.26392 52.5078 5.33032 52.5742 5.40845 52.6289C5.48657 52.6836 5.5686 52.7109 5.65454 52.7109H6.33423V53.1211H2.51392V52.7109H3.18188C3.27563 52.7109 3.36157 52.6836 3.4397 52.6289C3.51782 52.5664 3.58423 52.4922 3.63892 52.4062C3.70142 52.3203 3.74829 52.2305 3.77954 52.1367C3.8186 52.0352 3.83813 51.9453 3.83813 51.8672V37.1602H2.56079C2.27173 37.1602 2.05688 37.2539 1.91626 37.4414C1.78345 37.6289 1.71704 37.8555 1.71704 38.1211V39.8906H1.3186V35.7188H1.71704V36.6094H6.88501V35.6016H7.29517V39.75H6.88501V38.1445C6.88501 38.0195 6.86938 37.8984 6.83813 37.7812C6.8147 37.6641 6.77173 37.5586 6.70923 37.4648C6.65454 37.3711 6.57642 37.2969 6.47485 37.2422C6.37329 37.1875 6.2522 37.1602 6.11157 37.1602H5.03345ZM11.0569 50.3086C10.9631 50.4727 10.8381 50.625 10.6819 50.7656C10.5256 50.9062 10.3577 51.0312 10.178 51.1406C9.99829 51.25 9.81079 51.3359 9.61548 51.3984C9.42017 51.4609 9.23657 51.4922 9.0647 51.4922C8.79907 51.4922 8.5686 51.4375 8.37329 51.3281C8.17798 51.2109 8.01392 51.0625 7.8811 50.8828C7.74829 50.6953 7.64673 50.4883 7.57642 50.2617C7.51392 50.0273 7.48267 49.7891 7.48267 49.5469C7.48267 49.0938 7.58032 48.6953 7.77563 48.3516C7.97095 48 8.21313 47.6797 8.5022 47.3906C8.79126 47.1016 9.10767 46.8242 9.45142 46.5586C9.79517 46.293 10.1116 46.0078 10.4006 45.7031C10.6897 45.3984 10.9319 45.0625 11.1272 44.6953C11.3225 44.3281 11.4202 43.8945 11.4202 43.3945C11.428 43.1523 11.4045 42.8984 11.3499 42.6328C11.2952 42.3672 11.1975 42.125 11.0569 41.9062C10.9241 41.6797 10.7522 41.4961 10.5413 41.3555C10.3303 41.2148 10.0803 41.1445 9.79126 41.1445C9.47876 41.1445 9.22095 41.2188 9.01782 41.3672C8.82251 41.5156 8.66626 41.707 8.54907 41.9414C8.43188 42.168 8.34985 42.4258 8.30298 42.7148C8.26392 42.9961 8.24438 43.2734 8.24438 43.5469C8.24438 43.6562 8.2522 43.793 8.26782 43.957C8.28345 44.1211 8.31079 44.2812 8.34985 44.4375C8.38892 44.5859 8.4397 44.7148 8.5022 44.8242C8.57251 44.9336 8.65845 44.9883 8.76001 44.9883C8.86938 44.9883 8.95532 44.9531 9.01782 44.8828C9.08813 44.8125 9.13892 44.7305 9.17017 44.6367C9.20923 44.5352 9.22876 44.4297 9.22876 44.3203C9.23657 44.2109 9.23657 44.1133 9.22876 44.0273L9.63892 44.0039C9.64673 44.1836 9.63501 44.3594 9.60376 44.5312C9.58032 44.6953 9.53345 44.8438 9.46313 44.9766C9.39282 45.1094 9.29907 45.2148 9.18188 45.293C9.0647 45.3711 8.92407 45.4102 8.76001 45.4102C8.53345 45.4102 8.34204 45.3477 8.18579 45.2227C8.03735 45.0898 7.92017 44.9297 7.83423 44.7422C7.74829 44.5469 7.68579 44.3398 7.64673 44.1211C7.61548 43.9023 7.59985 43.7031 7.59985 43.5234C7.59985 43.1719 7.64673 42.8281 7.74048 42.4922C7.83423 42.1562 7.97485 41.8555 8.16235 41.5898C8.34985 41.3164 8.58813 41.0977 8.8772 40.9336C9.16626 40.7695 9.51001 40.6875 9.90845 40.6875C10.4084 40.6875 10.8225 40.8086 11.1506 41.0508C11.4788 41.293 11.7405 41.6016 11.9358 41.9766C12.1311 42.3438 12.2678 42.7461 12.3459 43.1836C12.4319 43.6133 12.4749 44.0195 12.4749 44.4023C12.4749 45.3945 12.4397 46.3828 12.3694 47.3672C12.2991 48.3438 12.2639 49.332 12.2639 50.332C12.2639 50.5508 12.2913 50.7188 12.3459 50.8359C12.4006 50.9453 12.4788 51.0234 12.5803 51.0703C12.6819 51.1172 12.803 51.1445 12.9436 51.1523C13.092 51.1602 13.2561 51.168 13.4358 51.1758V51.5859C13.0217 51.5703 12.6116 51.5586 12.2053 51.5508C11.8069 51.5352 11.4084 51.5156 11.01 51.4922L11.0569 50.3086ZM9.70923 50.7422C9.8186 50.7422 9.93579 50.7148 10.0608 50.6602C10.1936 50.5977 10.3225 50.5156 10.4475 50.4141C10.5725 50.3047 10.6897 50.1836 10.7991 50.0508C10.9163 49.9102 11.0178 49.7578 11.1038 49.5938L11.3264 45.3633C11.0999 45.6758 10.8342 45.9883 10.5295 46.3008C10.2327 46.6055 9.94751 46.918 9.67407 47.2383C9.40845 47.5586 9.17798 47.8906 8.98267 48.2344C8.79517 48.5781 8.70142 48.9414 8.70142 49.3242C8.70142 49.4648 8.72095 49.6211 8.76001 49.793C8.79907 49.957 8.85767 50.1094 8.93579 50.25C9.02173 50.3906 9.1272 50.5078 9.2522 50.6016C9.38501 50.6953 9.53735 50.7422 9.70923 50.7422ZM16.1663 38.7656C16.1663 38.9688 16.092 39.1484 15.9436 39.3047C15.7952 39.4609 15.6194 39.5391 15.4163 39.5391C15.2131 39.5391 15.0334 39.4609 14.8772 39.3047C14.7209 39.1484 14.6428 38.9688 14.6428 38.7656C14.6428 38.5625 14.7209 38.3906 14.8772 38.25C15.0334 38.1016 15.2131 38.0273 15.4163 38.0273C15.6194 38.0273 15.7952 38.1016 15.9436 38.25C16.092 38.3906 16.1663 38.5625 16.1663 38.7656ZM17.1155 49.875V50.2852H13.7639V49.8516H14.8655L14.8889 42.6562C14.8889 42.5156 14.8772 42.375 14.8538 42.2344C14.8303 42.0859 14.7874 41.9531 14.7249 41.8359C14.6624 41.7109 14.5764 41.6094 14.467 41.5312C14.3655 41.4531 14.2327 41.4102 14.0686 41.4023H13.5647V41.0039L16.1311 41.0508L16.0374 49.8516L17.1155 49.875ZM20.8186 52.207L17.3381 52.3242L17.3147 51.9141L17.7249 51.8906C17.8342 51.8906 17.9358 51.8633 18.0295 51.8086C18.1233 51.7461 18.2014 51.6719 18.2639 51.5859C18.3342 51.4922 18.3889 51.3945 18.428 51.293C18.467 51.1836 18.4866 51.082 18.4866 50.9883L18.6389 38.0039C18.6389 37.8711 18.6272 37.7344 18.6038 37.5938C18.5803 37.4531 18.5374 37.3242 18.4749 37.207C18.4202 37.0898 18.3381 36.9922 18.2288 36.9141C18.1194 36.8359 17.9827 36.7969 17.8186 36.7969L17.4084 36.8203V36.3867H19.8342L19.6702 50.8125C19.6702 50.9062 19.6897 51.0117 19.7288 51.1289C19.7756 51.2461 19.8342 51.3555 19.9045 51.457C19.9749 51.5586 20.0569 51.6445 20.1506 51.7148C20.2522 51.7773 20.3616 51.8047 20.4788 51.7969H20.8186V52.207ZM29.7834 39.7969V40.0898C29.6741 40.0742 29.5842 40.0664 29.5139 40.0664C29.4514 40.0664 29.3733 40.0664 29.2795 40.0664C29.0842 40.0664 28.9084 40.125 28.7522 40.2422C28.5959 40.3594 28.4983 40.5156 28.4592 40.7109L26.76 51.9961C26.7522 52.0664 26.76 52.1406 26.7834 52.2188C26.8147 52.2891 26.8577 52.3594 26.9124 52.4297C26.967 52.4922 27.0295 52.543 27.0999 52.582C27.1702 52.6211 27.2483 52.6406 27.3342 52.6406L28.0491 52.6641V52.9219H24.9788V52.6406H25.5295C25.6311 52.6406 25.7053 52.6016 25.7522 52.5234C25.7991 52.4375 25.8225 52.3477 25.8225 52.2539C25.8225 52.2461 25.8108 52.1445 25.7874 51.9492C25.7639 51.7539 25.7209 51.4023 25.6584 50.8945C25.5959 50.3789 25.5061 49.6836 25.3889 48.8086C25.2795 47.9258 25.135 46.8008 24.9553 45.4336L23.9241 51.5859C23.9084 51.6719 23.9241 51.7422 23.9709 51.7969C24.0256 51.8438 24.092 51.8789 24.1702 51.9023C24.2483 51.9258 24.3342 51.9414 24.428 51.9492C24.5217 51.9492 24.5999 51.9453 24.6624 51.9375V52.2305L21.885 52.207V51.9141H22.5764C22.7014 51.9141 22.7991 51.8945 22.8694 51.8555C22.9475 51.8086 22.9788 51.7188 22.9631 51.5859L22.1663 40.7109C22.1506 40.5234 22.1194 40.3867 22.0725 40.3008C22.0256 40.207 21.9553 40.1445 21.8616 40.1133C21.7756 40.0742 21.6702 40.0586 21.5452 40.0664C21.4202 40.0664 21.2756 40.0664 21.1116 40.0664V39.7734L24.3342 39.7969V40.0898C24.2014 40.0898 24.0725 40.0898 23.9475 40.0898C23.8303 40.082 23.7249 40.0938 23.6311 40.125C23.5452 40.1562 23.4749 40.2148 23.4202 40.3008C23.3733 40.3789 23.3577 40.5 23.3733 40.6641L23.8538 49.8516L25.1663 42.082H25.5999L26.6311 50.4844C26.8811 48.6641 27.1077 47.0352 27.3108 45.5977C27.3967 44.9883 27.4788 44.3906 27.5569 43.8047C27.6428 43.2109 27.717 42.6836 27.7795 42.2227C27.8499 41.7617 27.9045 41.3906 27.9436 41.1094C27.9827 40.8203 28.0022 40.6719 28.0022 40.6641C28.0022 40.4844 27.9631 40.3477 27.885 40.2539C27.8147 40.1602 27.7209 40.0938 27.6038 40.0547C27.4944 40.0156 27.3694 39.9961 27.2288 39.9961C27.0881 39.9883 26.9475 39.9805 26.8069 39.9727L26.8303 39.6797L29.7834 39.7969ZM32.1038 38.7656C32.1038 38.9688 32.0295 39.1484 31.8811 39.3047C31.7327 39.4609 31.5569 39.5391 31.3538 39.5391C31.1506 39.5391 30.9709 39.4609 30.8147 39.3047C30.6584 39.1484 30.5803 38.9688 30.5803 38.7656C30.5803 38.5625 30.6584 38.3906 30.8147 38.25C30.9709 38.1016 31.1506 38.0273 31.3538 38.0273C31.5569 38.0273 31.7327 38.1016 31.8811 38.25C32.0295 38.3906 32.1038 38.5625 32.1038 38.7656ZM33.053 49.875V50.2852H29.7014V49.8516H30.803L30.8264 42.6562C30.8264 42.5156 30.8147 42.375 30.7913 42.2344C30.7678 42.0859 30.7249 41.9531 30.6624 41.8359C30.5999 41.7109 30.5139 41.6094 30.4045 41.5312C30.303 41.4531 30.1702 41.4102 30.0061 41.4023H29.5022V41.0039L32.0686 41.0508L31.9749 49.8516L33.053 49.875ZM35.7249 50.9531C35.717 51.1328 35.7444 51.2734 35.8069 51.375C35.8772 51.4766 35.967 51.5508 36.0764 51.5977C36.1858 51.6445 36.3069 51.6758 36.4397 51.6914C36.5803 51.6992 36.717 51.7031 36.8499 51.7031V52.1133H33.3225V51.6797C33.4709 51.6875 33.6155 51.6914 33.7561 51.6914C33.9045 51.6914 34.0334 51.6719 34.1428 51.6328C34.26 51.5859 34.3538 51.5117 34.4241 51.4102C34.4944 51.3086 34.5295 51.1562 34.5295 50.9531L34.5999 42.6094C34.5999 42.3672 34.5764 42.1758 34.5295 42.0352C34.4905 41.8945 34.4241 41.7852 34.3303 41.707C34.2366 41.6289 34.1116 41.5781 33.9553 41.5547C33.7991 41.5312 33.6116 41.5156 33.3928 41.5078V41.0977C33.3928 41.0977 33.428 41.1016 33.4983 41.1094C33.5686 41.1094 33.6584 41.1133 33.7678 41.1211C33.8772 41.1289 34.0022 41.1367 34.1428 41.1445C34.2913 41.1445 34.4436 41.1445 34.5999 41.1445L35.8186 41.168L35.7952 42.4336C35.9202 42.1992 36.0569 42.0039 36.2053 41.8477C36.3538 41.6836 36.5061 41.5547 36.6624 41.4609C36.8186 41.3594 36.9788 41.2891 37.1428 41.25C37.3069 41.2109 37.467 41.1914 37.6233 41.1914C37.9124 41.1914 38.1624 41.2461 38.3733 41.3555C38.592 41.457 38.7717 41.5977 38.9124 41.7773C39.053 41.9492 39.1584 42.1523 39.2288 42.3867C39.2991 42.6211 39.3303 42.8711 39.3225 43.1367L39.2288 49.7109C39.2209 49.8906 39.2483 50.0312 39.3108 50.1328C39.3811 50.2266 39.4709 50.2969 39.5803 50.3438C39.6897 50.3906 39.8108 50.418 39.9436 50.4258C40.0842 50.4336 40.2209 50.4336 40.3538 50.4258L40.3772 50.8594L36.8264 50.8359V50.4258C36.9749 50.4258 37.1194 50.4258 37.26 50.4258C37.4084 50.418 37.5413 50.3945 37.6584 50.3555C37.7756 50.3164 37.8694 50.2461 37.9397 50.1445C38.01 50.043 38.0491 49.8906 38.0569 49.6875L38.1038 42.9375C38.1038 42.8281 38.0881 42.7148 38.0569 42.5977C38.0334 42.4727 37.9905 42.3594 37.928 42.2578C37.8733 42.1562 37.7952 42.0742 37.6936 42.0117C37.592 41.9414 37.4709 41.9062 37.3303 41.9062C37.0334 41.9062 36.76 42.0156 36.51 42.2344C36.26 42.4453 36.0217 42.7852 35.7952 43.2539L35.7249 50.9531ZM45.3694 39.1758C45.3616 39.0352 45.3459 38.8945 45.3225 38.7539C45.3069 38.6133 45.2717 38.4883 45.217 38.3789C45.1624 38.2617 45.0842 38.168 44.9827 38.0977C44.8811 38.0195 44.7444 37.9805 44.5725 37.9805H44.1389V37.5703C44.2405 37.5703 44.3499 37.5703 44.467 37.5703C44.5842 37.5625 44.7327 37.5586 44.9124 37.5586C45.092 37.5586 45.3108 37.5586 45.5686 37.5586C45.8342 37.5508 46.1663 37.5469 46.5647 37.5469L46.8342 50.5078C46.842 50.7578 46.8655 50.957 46.9045 51.1055C46.9514 51.2539 47.0217 51.3711 47.1155 51.457C47.217 51.5352 47.3459 51.5859 47.5022 51.6094C47.6584 51.6328 47.8499 51.6406 48.0764 51.6328V52.043C47.9749 52.0508 47.8655 52.0586 47.7483 52.0664C47.6389 52.0664 47.4944 52.0664 47.3147 52.0664C47.1428 52.0664 46.9241 52.0664 46.6584 52.0664C46.3928 52.0664 46.0569 52.0664 45.6506 52.0664L45.6272 51.082C45.5022 51.2148 45.3577 51.3398 45.1936 51.457C45.0374 51.5742 44.8733 51.6797 44.7014 51.7734C44.5295 51.8594 44.3538 51.9297 44.1741 51.9844C43.9944 52.0391 43.8225 52.0664 43.6584 52.0664C43.2444 52.0664 42.8967 51.9844 42.6155 51.8203C42.3342 51.6562 42.0999 51.4336 41.9124 51.1523C41.7249 50.8633 41.5803 50.5234 41.4788 50.1328C41.3772 49.7422 41.303 49.3203 41.2561 48.8672C41.2092 48.4141 41.1819 47.9414 41.1741 47.4492C41.1663 46.957 41.1624 46.4648 41.1624 45.9727C41.1624 45.6914 41.1702 45.3867 41.1858 45.0586C41.2014 44.7305 41.2327 44.4062 41.2795 44.0859C41.3342 43.7578 41.4084 43.4453 41.5022 43.1484C41.6038 42.8516 41.7366 42.5898 41.9006 42.3633C42.0647 42.1289 42.2678 41.9453 42.51 41.8125C42.7522 41.6719 43.0413 41.6016 43.3772 41.6016C44.1506 41.6016 44.8381 42.0312 45.4397 42.8906L45.3694 39.1758ZM43.6819 42.2227C43.4553 42.2227 43.2678 42.3047 43.1194 42.4688C42.9709 42.6328 42.8499 42.8438 42.7561 43.1016C42.6624 43.3516 42.592 43.6367 42.5452 43.957C42.4983 44.2695 42.4631 44.582 42.4397 44.8945C42.4241 45.1992 42.4163 45.4844 42.4163 45.75C42.4163 46.0156 42.4163 46.2227 42.4163 46.3711C42.4163 46.5977 42.4163 46.8828 42.4163 47.2266C42.4241 47.5703 42.4397 47.9336 42.4631 48.3164C42.4944 48.6992 42.5413 49.082 42.6038 49.4648C42.6663 49.8477 42.7522 50.1953 42.8616 50.5078C42.9788 50.8125 43.1233 51.0625 43.2952 51.2578C43.467 51.4453 43.678 51.5391 43.928 51.5391C44.0686 51.5391 44.217 51.5078 44.3733 51.4453C44.5295 51.375 44.6819 51.2891 44.8303 51.1875C44.9788 51.0781 45.1194 50.957 45.2522 50.8242C45.385 50.6914 45.5022 50.5586 45.6038 50.4258L45.4631 43.8047C45.3694 43.6328 45.2561 43.4531 45.1233 43.2656C44.9983 43.0781 44.8577 42.9102 44.7014 42.7617C44.553 42.6055 44.3889 42.4766 44.2092 42.375C44.0374 42.2734 43.8616 42.2227 43.6819 42.2227ZM58.8811 50.0508C58.8811 50.4492 58.842 50.8555 58.7639 51.2695C58.6936 51.6758 58.5686 52.043 58.3889 52.3711C58.2092 52.6992 57.9592 52.9688 57.6389 53.1797C57.3264 53.3828 56.9319 53.4844 56.4553 53.4844C55.9319 53.4844 55.4944 53.3438 55.1428 53.0625C54.7913 52.7812 54.4983 52.4102 54.2639 51.9492C54.0374 51.4805 53.8616 50.9453 53.7366 50.3438C53.6194 49.7344 53.5295 49.1055 53.467 48.457C53.4124 47.8086 53.3811 47.1602 53.3733 46.5117C53.3655 45.8555 53.3616 45.25 53.3616 44.6953C53.3616 44.1562 53.3655 43.5703 53.3733 42.9375C53.3811 42.3047 53.4084 41.6719 53.4553 41.0391C53.5022 40.3984 53.5803 39.7852 53.6897 39.1992C53.7991 38.6055 53.9514 38.082 54.1467 37.6289C54.3499 37.1758 54.6077 36.8125 54.9202 36.5391C55.2327 36.2656 55.6155 36.1289 56.0686 36.1289C56.3186 36.1289 56.5452 36.1797 56.7483 36.2812C56.9514 36.3828 57.1311 36.5156 57.2874 36.6797C57.4436 36.8359 57.5842 37.0156 57.7092 37.2188C57.8342 37.4219 57.9436 37.625 58.0374 37.8281L57.9905 35.8828H58.4006L58.5647 40.9453L58.1545 40.9805C58.1467 40.7773 58.1311 40.5312 58.1077 40.2422C58.092 39.9453 58.0569 39.6367 58.0022 39.3164C57.9553 38.9961 57.885 38.6797 57.7913 38.3672C57.7053 38.0547 57.592 37.7734 57.4514 37.5234C57.3108 37.2734 57.1389 37.0703 56.9358 36.9141C56.7327 36.7578 56.4905 36.6797 56.2092 36.6797C55.9358 36.6797 55.7053 36.8242 55.5178 37.1133C55.3381 37.3945 55.1858 37.7656 55.0608 38.2266C54.9436 38.6875 54.8499 39.2031 54.7795 39.7734C54.717 40.3359 54.6702 40.9023 54.6389 41.4727C54.6077 42.043 54.5881 42.582 54.5803 43.0898C54.5803 43.5898 54.5803 44.0039 54.5803 44.332C54.5803 44.8555 54.5842 45.4297 54.592 46.0547C54.5999 46.6797 54.6233 47.3047 54.6624 47.9297C54.7092 48.5547 54.7795 49.1602 54.8733 49.7461C54.967 50.332 55.0999 50.8516 55.2717 51.3047C55.4436 51.7578 55.6624 52.1211 55.928 52.3945C56.1936 52.668 56.5217 52.8047 56.9124 52.8047C57.1545 52.8047 57.3616 52.75 57.5334 52.6406C57.7131 52.5312 57.8616 52.3906 57.9788 52.2188C58.0959 52.0469 58.1897 51.8477 58.26 51.6211C58.3303 51.3945 58.3811 51.1641 58.4124 50.9297C58.4514 50.6953 58.4749 50.4648 58.4827 50.2383C58.4905 50.0117 58.4944 49.8125 58.4944 49.6406H58.8577C58.8577 49.7109 58.8616 49.7812 58.8694 49.8516C58.8772 49.9219 58.8811 49.9883 58.8811 50.0508ZM64.717 34.7344L64.6467 41.7422H64.2366C64.2366 41.5234 64.2366 41.3203 64.2366 41.1328C64.2444 40.9453 64.2483 40.7617 64.2483 40.582C64.2483 40.3945 64.2483 40.207 64.2483 40.0195C64.2561 39.832 64.26 39.6289 64.26 39.4102C64.26 39.1836 64.2131 38.9258 64.1194 38.6367C64.0334 38.3477 63.9124 38.0742 63.7561 37.8164C63.6077 37.5586 63.4241 37.3398 63.2053 37.1602C62.9944 36.9805 62.7678 36.8906 62.5256 36.8906C62.2834 36.8906 62.0764 36.9688 61.9045 37.125C61.7405 37.2812 61.5999 37.4844 61.4827 37.7344C61.3733 37.9766 61.2874 38.25 61.2249 38.5547C61.1624 38.8516 61.1155 39.1484 61.0842 39.4453C61.053 39.7422 61.0334 40.0195 61.0256 40.2773C61.0178 40.5352 61.0139 40.7422 61.0139 40.8984C61.0139 41.4609 61.0413 41.9453 61.0959 42.3516C61.1506 42.7578 61.2561 43.1172 61.4124 43.4297C61.5764 43.7422 61.7952 44.0312 62.0686 44.2969C62.3499 44.5547 62.7131 44.8242 63.1584 45.1055C63.5413 45.3555 63.8459 45.6445 64.0725 45.9727C64.3069 46.3008 64.4827 46.6562 64.5999 47.0391C64.7249 47.4141 64.8069 47.8047 64.8459 48.2109C64.885 48.6094 64.9045 49.0039 64.9045 49.3945C64.9045 49.707 64.8928 50.0273 64.8694 50.3555C64.8538 50.6836 64.8147 51.0078 64.7522 51.3281C64.6897 51.6406 64.6038 51.9414 64.4944 52.2305C64.385 52.5117 64.2366 52.7617 64.0491 52.9805C63.8694 53.1914 63.6467 53.3594 63.3811 53.4844C63.1233 53.6094 62.8147 53.6719 62.4553 53.6719C62.01 53.6719 61.6311 53.582 61.3186 53.4023C61.0139 53.2227 60.7678 52.9883 60.5803 52.6992C60.3928 52.4023 60.2561 52.0703 60.1702 51.7031C60.092 51.3281 60.053 50.9531 60.053 50.5781C60.053 50.3906 60.0647 50.1758 60.0881 49.9336C60.1116 49.6836 60.1584 49.4492 60.2288 49.2305C60.3069 49.0039 60.4202 48.8164 60.5686 48.668C60.7249 48.5117 60.9319 48.4336 61.1897 48.4336C61.4319 48.4336 61.6194 48.5 61.7522 48.6328C61.885 48.7656 61.9788 48.9297 62.0334 49.125C62.0959 49.3203 62.1311 49.5312 62.1389 49.7578C62.1467 49.9766 62.1506 50.1758 62.1506 50.3555V50.8359L61.7405 50.8125V50.0742C61.7405 49.9805 61.7366 49.8633 61.7288 49.7227C61.7288 49.582 61.7092 49.4492 61.6702 49.3242C61.6389 49.1914 61.5842 49.0781 61.5061 48.9844C61.4358 48.8906 61.3303 48.8438 61.1897 48.8438C61.01 48.8438 60.8694 48.9141 60.7678 49.0547C60.6741 49.1875 60.6038 49.3477 60.5569 49.5352C60.51 49.7227 60.4827 49.9141 60.4749 50.1094C60.467 50.3047 60.4631 50.4609 60.4631 50.5781C60.4631 50.8672 60.4983 51.168 60.5686 51.4805C60.6389 51.7852 60.7483 52.0664 60.8967 52.3242C61.053 52.5742 61.2483 52.7812 61.4827 52.9453C61.7249 53.1094 62.01 53.1914 62.3381 53.1914C62.5959 53.1914 62.8147 53.1016 62.9944 52.9219C63.1741 52.7422 63.3186 52.5156 63.428 52.2422C63.5452 51.9609 63.6311 51.6523 63.6858 51.3164C63.7483 50.9727 63.7913 50.6406 63.8147 50.3203C63.8459 49.9922 63.8616 49.6914 63.8616 49.418C63.8694 49.1445 63.8733 48.9375 63.8733 48.7969C63.8733 48.4531 63.8538 48.1172 63.8147 47.7891C63.7834 47.4609 63.717 47.1523 63.6155 46.8633C63.5139 46.5664 63.3694 46.2969 63.1819 46.0547C63.0022 45.8125 62.76 45.6055 62.4553 45.4336C61.9241 45.1367 61.4944 44.8164 61.1663 44.4727C60.8459 44.1289 60.5959 43.7617 60.4163 43.3711C60.2444 42.9727 60.1272 42.5508 60.0647 42.1055C60.01 41.6523 59.9827 41.1719 59.9827 40.6641C59.9827 40.4062 59.9905 40.1172 60.0061 39.7969C60.0217 39.4766 60.0569 39.1562 60.1116 38.8359C60.1663 38.5078 60.2444 38.1914 60.3459 37.8867C60.4475 37.5742 60.5842 37.3008 60.7561 37.0664C60.9358 36.8242 61.1506 36.6328 61.4006 36.4922C61.6584 36.3438 61.9631 36.2695 62.3147 36.2695C62.6038 36.2695 62.8577 36.3242 63.0764 36.4336C63.2952 36.543 63.4827 36.6875 63.6389 36.8672C63.7952 37.0391 63.9241 37.2305 64.0256 37.4414C64.1272 37.6523 64.2053 37.8555 64.26 38.0508L64.2834 34.7344H64.717ZM70.9983 34.7344L70.928 41.7422H70.5178C70.5178 41.5234 70.5178 41.3203 70.5178 41.1328C70.5256 40.9453 70.5295 40.7617 70.5295 40.582C70.5295 40.3945 70.5295 40.207 70.5295 40.0195C70.5374 39.832 70.5413 39.6289 70.5413 39.4102C70.5413 39.1836 70.4944 38.9258 70.4006 38.6367C70.3147 38.3477 70.1936 38.0742 70.0374 37.8164C69.8889 37.5586 69.7053 37.3398 69.4866 37.1602C69.2756 36.9805 69.0491 36.8906 68.8069 36.8906C68.5647 36.8906 68.3577 36.9688 68.1858 37.125C68.0217 37.2812 67.8811 37.4844 67.7639 37.7344C67.6545 37.9766 67.5686 38.25 67.5061 38.5547C67.4436 38.8516 67.3967 39.1484 67.3655 39.4453C67.3342 39.7422 67.3147 40.0195 67.3069 40.2773C67.2991 40.5352 67.2952 40.7422 67.2952 40.8984C67.2952 41.4609 67.3225 41.9453 67.3772 42.3516C67.4319 42.7578 67.5374 43.1172 67.6936 43.4297C67.8577 43.7422 68.0764 44.0312 68.3499 44.2969C68.6311 44.5547 68.9944 44.8242 69.4397 45.1055C69.8225 45.3555 70.1272 45.6445 70.3538 45.9727C70.5881 46.3008 70.7639 46.6562 70.8811 47.0391C71.0061 47.4141 71.0881 47.8047 71.1272 48.2109C71.1663 48.6094 71.1858 49.0039 71.1858 49.3945C71.1858 49.707 71.1741 50.0273 71.1506 50.3555C71.135 50.6836 71.0959 51.0078 71.0334 51.3281C70.9709 51.6406 70.885 51.9414 70.7756 52.2305C70.6663 52.5117 70.5178 52.7617 70.3303 52.9805C70.1506 53.1914 69.928 53.3594 69.6624 53.4844C69.4045 53.6094 69.0959 53.6719 68.7366 53.6719C68.2913 53.6719 67.9124 53.582 67.5999 53.4023C67.2952 53.2227 67.0491 52.9883 66.8616 52.6992C66.6741 52.4023 66.5374 52.0703 66.4514 51.7031C66.3733 51.3281 66.3342 50.9531 66.3342 50.5781C66.3342 50.3906 66.3459 50.1758 66.3694 49.9336C66.3928 49.6836 66.4397 49.4492 66.51 49.2305C66.5881 49.0039 66.7014 48.8164 66.8499 48.668C67.0061 48.5117 67.2131 48.4336 67.4709 48.4336C67.7131 48.4336 67.9006 48.5 68.0334 48.6328C68.1663 48.7656 68.26 48.9297 68.3147 49.125C68.3772 49.3203 68.4124 49.5312 68.4202 49.7578C68.428 49.9766 68.4319 50.1758 68.4319 50.3555V50.8359L68.0217 50.8125V50.0742C68.0217 49.9805 68.0178 49.8633 68.01 49.7227C68.01 49.582 67.9905 49.4492 67.9514 49.3242C67.9202 49.1914 67.8655 49.0781 67.7874 48.9844C67.717 48.8906 67.6116 48.8438 67.4709 48.8438C67.2913 48.8438 67.1506 48.9141 67.0491 49.0547C66.9553 49.1875 66.885 49.3477 66.8381 49.5352C66.7913 49.7227 66.7639 49.9141 66.7561 50.1094C66.7483 50.3047 66.7444 50.4609 66.7444 50.5781C66.7444 50.8672 66.7795 51.168 66.8499 51.4805C66.9202 51.7852 67.0295 52.0664 67.178 52.3242C67.3342 52.5742 67.5295 52.7812 67.7639 52.9453C68.0061 53.1094 68.2913 53.1914 68.6194 53.1914C68.8772 53.1914 69.0959 53.1016 69.2756 52.9219C69.4553 52.7422 69.5999 52.5156 69.7092 52.2422C69.8264 51.9609 69.9124 51.6523 69.967 51.3164C70.0295 50.9727 70.0725 50.6406 70.0959 50.3203C70.1272 49.9922 70.1428 49.6914 70.1428 49.418C70.1506 49.1445 70.1545 48.9375 70.1545 48.7969C70.1545 48.4531 70.135 48.1172 70.0959 47.7891C70.0647 47.4609 69.9983 47.1523 69.8967 46.8633C69.7952 46.5664 69.6506 46.2969 69.4631 46.0547C69.2834 45.8125 69.0413 45.6055 68.7366 45.4336C68.2053 45.1367 67.7756 44.8164 67.4475 44.4727C67.1272 44.1289 66.8772 43.7617 66.6975 43.3711C66.5256 42.9727 66.4084 42.5508 66.3459 42.1055C66.2913 41.6523 66.2639 41.1719 66.2639 40.6641C66.2639 40.4062 66.2717 40.1172 66.2874 39.7969C66.303 39.4766 66.3381 39.1562 66.3928 38.8359C66.4475 38.5078 66.5256 38.1914 66.6272 37.8867C66.7288 37.5742 66.8655 37.3008 67.0374 37.0664C67.217 36.8242 67.4319 36.6328 67.6819 36.4922C67.9397 36.3438 68.2444 36.2695 68.5959 36.2695C68.885 36.2695 69.1389 36.3242 69.3577 36.4336C69.5764 36.543 69.7639 36.6875 69.9202 36.8672C70.0764 37.0391 70.2053 37.2305 70.3069 37.4414C70.4084 37.6523 70.4866 37.8555 70.5413 38.0508L70.5647 34.7344H70.9983Z" fill="white"/>
        </svg>
        </OverlayTrigger>
    )
}