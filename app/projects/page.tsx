import Card from "../components/Card"
import SVGh2 from "../components/SVGh2"
import { projectsInfo } from "../projectsInfo/projects"

export default function Projects(){
    const cards: JSX.Element[] = []
    const projects = projectsInfo;
    projects.forEach(project => {
        cards.push(<Card info={project} />)
    });


    return (
        <section className='min-h-[90vh] bg-black w-full h-fit pb-20'>
            <div className='flex flex-col lg:flex-row w-full justify-between'>
                <div className='flex flex-col gap-[2.5rem] lg:max-w-[50%]'>
                <div className='flex flex-row'>
                    <h1 className='text-lg text-white md:text-[3rem] lg:text-xl'>projects</h1>
                    <SVGh2/>
                </div>
                <div className='flex flex-col gap-[1.5rem]'>
                    <p className='text-white text-sm md:text-md lg:text-sm'>In my recent projects, I’ve had the opportunity to work on a diverse range of websites. My work includes constructing portfolios for myself and a UX designer, a user-friendly contractor's website, and a dynamic online space tailored for guitar enthusiasts. </p>
                </div>
                </div>
                <div className='md:pb-[40px] justify-start w-full'>
                <svg className='mx-auto md:max-w-[400px] w-full h-auto' viewBox="0 0 328 351" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_14821_1424" fill="white">
                        <path d="M236.603 124.829C236.603 110.396 228.403 96.5536 213.806 86.3477C199.209 76.1418 179.412 70.4082 158.769 70.4082C138.126 70.4082 118.329 76.1418 103.732 86.3477C89.1352 96.5536 80.9348 110.396 80.9348 124.829L158.769 124.829H236.603Z"/>
                        </mask>
                        <path d="M236.603 124.829C236.603 110.396 228.403 96.5536 213.806 86.3477C199.209 76.1418 179.412 70.4082 158.769 70.4082C138.126 70.4082 118.329 76.1418 103.732 86.3477C89.1352 96.5536 80.9348 110.396 80.9348 124.829L158.769 124.829H236.603Z" fill="#424242" stroke="#5544DC" stroke-width="14" mask="url(#path-1-inside-1_14821_1424)"/>
                        <path d="M276.45 147.268C276.45 150.334 274.246 154.033 268.34 158.021C262.557 161.927 253.957 165.581 243.017 168.706C221.184 174.942 190.819 178.845 157.135 178.845C123.451 178.845 93.0856 174.942 71.2528 168.706C60.3125 165.581 51.7135 161.927 45.9299 158.021C40.0239 154.033 37.8198 150.334 37.8198 147.268C37.8198 144.202 40.0239 140.503 45.9299 136.515C51.7135 132.61 60.3125 128.955 71.2528 125.83C93.0856 119.595 123.451 115.691 157.135 115.691C190.819 115.691 221.184 119.595 243.017 125.83C253.957 128.955 262.557 132.61 268.34 136.515C274.246 140.503 276.45 144.202 276.45 147.268Z" fill="#424242" stroke="#5544DC" stroke-width="7"/>
                        <path d="M213.653 162.228C213.653 162.782 213.223 164.106 210.472 165.943C207.852 167.692 203.829 169.404 198.544 170.896C188.023 173.867 173.286 175.75 156.866 175.75C140.445 175.75 125.708 173.867 115.187 170.896C109.902 169.404 105.88 167.692 103.259 165.943C100.508 164.106 100.078 162.782 100.078 162.228C100.078 161.673 100.508 160.349 103.259 158.512C105.88 156.763 109.902 155.051 115.187 153.559C125.708 150.588 140.445 148.705 156.866 148.705C173.286 148.705 188.023 150.588 198.544 153.559C203.829 155.051 207.852 156.763 210.472 158.512C213.223 160.349 213.653 161.673 213.653 162.228Z" stroke="#5544DC" stroke-width="7"/>
                        <path d="M186.373 168.538C187.002 168.961 187.303 169.271 187.442 169.449C187.303 169.628 187.002 169.937 186.373 170.36C185.061 171.243 182.931 172.175 179.985 173.013C174.141 174.675 165.865 175.75 156.579 175.75C147.294 175.75 139.018 174.675 133.173 173.013C130.228 172.175 128.098 171.243 126.785 170.36C126.156 169.937 125.856 169.628 125.716 169.449C125.856 169.271 126.156 168.961 126.785 168.538C128.098 167.656 130.228 166.723 133.173 165.885C139.018 164.223 147.294 163.148 156.579 163.148C165.865 163.148 174.141 164.223 179.985 165.885C182.931 166.723 185.061 167.656 186.373 168.538Z" stroke="#5544DC" stroke-width="7"/>
                        <path d="M60.9961 127.15C60.9961 127.15 70.4352 139.636 78.6853 145.407C86.9423 151.183 103.648 156.992 103.648 156.992" stroke="#5544DC" stroke-width="11"/>
                        <path d="M124.419 115.781C124.419 115.781 126.514 126.475 129.234 132.911C131.884 139.183 137.97 148.138 137.97 148.138" stroke="#5544DC" stroke-width="11"/>
                        <path d="M190.174 115.781C190.174 115.781 188.079 126.475 185.359 132.911C182.709 139.183 176.623 148.138 176.623 148.138" stroke="#5544DC" stroke-width="11"/>
                        <ellipse cx="55.4713" cy="147.268" rx="5.52425" ry="4.95858" className='window' fill="#FBF351"/>
                        <ellipse cx="100.835" cy="132.109" rx="5.52425" ry="4.95858" className='window'  fill="#FBF351"/>
                        <ellipse cx="158.008" cy="127.15" rx="5.52425" ry="4.95858" className='window'  fill="#FBF351"/>
                        <ellipse cx="215.091" cy="132.109" rx="5.52425" ry="4.95858" className='window'  fill="#FBF351"/>
                        <ellipse cx="260.288" cy="147.268" rx="5.52425" ry="4.95858" className='window'  fill="#FBF351"/>
                        <path d="M254.027 127.116C254.027 127.116 244.384 139.909 235.955 145.822C227.52 151.74 210.454 157.693 210.454 157.693" stroke="#5544DC" stroke-width="11"/>
                        <path d="M129.042 169.542L82.4121 332.747H236.445L183.699 169.542C168.652 163.241 140.549 163.906 129.042 169.542Z" fill="url(#paint0_linear_14821_1424)"/>
                        <path d="M129.042 169.542L82.4121 332.747H236.445L183.699 169.542C168.652 163.241 140.549 163.906 129.042 169.542Z" fill="url(#paint1_linear_14821_1424)"/>
                        <g filter="url(#filter0_f_14821_1424)">
                        <ellipse id='elipse' cx="159.236" cy="338.481" rx="77.2074" ry="11.0842" fill="#FBF351" fill-opacity="0.25"/>
                        </g>
                        <path d="M6.52286 108.179C5.80479 107.256 5.32611 105.179 5.08676 103.101C4.8474 101.023 5.16897 106.789 3.89 108.179C3.02812 109.116 1.25713 109.795 1.01778 109.795C0.77843 109.795 3.01944 110.31 3.89 111.18C5.16484 112.455 5.32611 116.259 5.32611 115.566C5.32611 114.874 5.66876 112.435 7.00155 111.18C8.0822 110.163 10.5919 109.795 10.1131 109.795C9.63442 109.795 7.24094 109.103 6.52286 108.179Z" fill="#FBF351" stroke="#FBF351" className='star' />
                        <path d="M221.327 10.3324C220.609 9.40907 220.13 7.33158 219.891 5.25407C219.652 3.17656 219.973 8.94237 218.694 10.3324C217.832 11.2692 216.061 11.9483 215.822 11.9483C215.583 11.9483 217.824 12.4627 218.694 13.3333C219.969 14.6081 220.13 18.4116 220.13 17.7191C220.13 17.0267 220.473 14.5879 221.806 13.3333C222.886 12.316 225.396 11.9483 224.917 11.9483C224.439 11.9483 222.045 11.2558 221.327 10.3324Z" fill="#5544DC" stroke="#5544DC" className='star2' />
                        <path d="M318.649 85.8119C317.502 84.283 316.738 80.8431 316.355 77.4032C315.973 73.9633 316.487 83.5103 314.444 85.8119C313.068 87.363 310.24 88.4874 309.858 88.4874C309.476 88.4874 313.054 89.3393 314.444 90.7807C316.48 92.8916 316.738 99.1894 316.738 98.0428C316.738 96.8962 317.285 92.8581 319.413 90.7807C321.139 89.0964 325.146 88.4875 324.382 88.4874C323.617 88.4874 319.795 87.3408 318.649 85.8119Z" fill="#FBF351" stroke="#FBF351" className='star'/>
                        <path d="M288.836 310.554C287.689 309.025 286.925 305.585 286.542 302.145C286.16 298.705 286.674 308.252 284.631 310.554C283.255 312.105 280.427 313.23 280.045 313.23C279.663 313.23 283.241 314.081 284.631 315.523C286.667 317.634 286.925 323.932 286.925 322.785C286.925 321.638 287.472 317.6 289.6 315.523C291.326 313.839 295.333 313.23 294.569 313.23C293.804 313.23 289.982 312.083 288.836 310.554Z" fill="#5544DC" stroke="#5544DC" className='star2'/>
                        <path d="M48.0405 243.284C46.8939 241.755 46.1294 238.316 45.7472 234.876C45.365 231.436 45.8785 240.983 43.8362 243.284C42.4598 244.835 39.6318 245.96 39.2496 245.96C38.8674 245.96 42.446 246.812 43.8362 248.253C45.8719 250.364 46.1294 256.662 46.1294 255.515C46.1294 254.369 46.6766 250.33 48.8049 248.253C50.5306 246.569 54.5382 245.96 53.7737 245.96C53.0093 245.96 49.1872 244.813 48.0405 243.284Z" fill="#5544DC" stroke="#5544DC" className='star'/>
                        <path d="M136.045 24.1452C136.525 25.5514 136.062 27.311 134.583 29.3614C133.113 31.399 130.706 33.6254 127.52 35.901C121.156 40.4483 111.783 45.1239 100.911 48.8344C90.0396 52.5449 79.764 54.5753 71.9472 54.8682C68.0355 55.0147 64.769 54.7249 62.3601 54.0112C59.9359 53.293 58.4942 52.1833 58.0142 50.777C57.5343 49.3708 57.9967 47.6112 59.4759 45.5608C60.9459 43.5232 63.3535 41.2968 66.5386 39.0212C72.9034 34.4739 82.2762 29.7983 93.1478 26.0878C104.02 22.3773 114.295 20.3469 122.112 20.054C126.024 19.9075 129.29 20.1973 131.699 20.911C134.123 21.6292 135.565 22.7389 136.045 24.1452Z" stroke="#FBF351"/>
                        <path d="M123.382 27.8552C123.707 28.8064 123.404 30.0276 122.346 31.494C121.297 32.9475 119.573 34.5443 117.28 36.1824C112.7 39.4548 105.948 42.8241 98.1096 45.4992C90.2715 48.1743 82.8683 49.6363 77.2431 49.847C74.4272 49.9525 72.0863 49.7432 70.3679 49.2341C68.6342 48.7205 67.6479 47.9393 67.3232 46.9881C66.9986 46.0369 67.3015 44.8158 68.3594 43.3494C69.408 41.8959 71.1325 40.299 73.4253 38.6609C78.0056 35.3885 84.7578 32.0192 92.5958 29.3441C100.434 26.669 107.837 25.2071 113.462 24.9963C116.278 24.8908 118.619 25.1001 120.337 25.6092C122.071 26.1229 123.058 26.904 123.382 27.8552Z" stroke="#FBF351"/>
                        <circle cx="111.397" cy="24.2202" r="6.73559" transform="rotate(-28.1665 111.397 24.2202)" fill="#5544DC"/>
                        <circle cx="77.0841" cy="54.9014" r="1.91107" transform="rotate(42.2169 77.0841 54.9014)" fill="white"/>
                        <path d="M318.155 233.585C317.87 234.382 317.022 235.043 315.504 235.466C314.002 235.885 311.957 236.036 309.495 235.906C304.579 235.646 298.119 234.269 291.29 231.827C284.462 229.384 278.594 226.351 274.628 223.434C272.642 221.973 271.157 220.559 270.262 219.283C269.357 217.993 269.12 216.944 269.405 216.147C269.69 215.35 270.538 214.689 272.056 214.266C273.558 213.847 275.603 213.696 278.065 213.826C282.981 214.087 289.442 215.463 296.27 217.906C303.098 220.348 308.966 223.381 312.932 226.299C314.918 227.759 316.403 229.173 317.299 230.45C318.203 231.74 318.44 232.788 318.155 233.585Z" stroke="#FBF351"/>
                        <path d="M267.312 235.762C267.591 236.417 268.464 236.941 270.143 237.152C271.782 237.358 274.012 237.241 276.691 236.805C282.042 235.935 289.071 233.816 296.502 230.647C303.933 227.477 310.327 223.871 314.659 220.611C316.828 218.978 318.456 217.45 319.441 216.124C320.451 214.766 320.677 213.774 320.398 213.119C320.119 212.464 319.246 211.941 317.567 211.729C315.928 211.523 313.698 211.641 311.018 212.076C305.668 212.946 298.638 215.065 291.208 218.234C283.777 221.404 277.382 225.01 273.051 228.27C270.882 229.903 269.254 231.431 268.269 232.757C267.259 234.115 267.033 235.107 267.312 235.762Z" stroke="#FBF351"/>
                        <path d="M285.194 250.975C285.854 251.219 286.801 250.976 288.048 249.998C289.27 249.04 290.649 247.475 292.097 245.399C294.989 241.254 298.09 235.167 300.701 228.122C303.312 221.076 304.928 214.438 305.436 209.41C305.69 206.891 305.664 204.806 305.362 203.284C305.053 201.729 304.494 200.926 303.834 200.682C303.174 200.437 302.226 200.681 300.979 201.659C299.758 202.617 298.379 204.182 296.93 206.257C294.039 210.402 290.938 216.49 288.327 223.535C285.715 230.581 284.1 237.218 283.592 242.247C283.337 244.765 283.364 246.851 283.666 248.373C283.974 249.928 284.534 250.73 285.194 250.975Z" stroke="#FBF351"/>
                        <defs>
                        <filter id="filter0_f_14821_1424" x="81.0291" y="326.396" width="156.415" height="24.1685" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_14821_1424"/>
                        </filter>
                        <linearGradient id="paint0_linear_14821_1424" x1="158.855" y1="165.062" x2="158.855" y2="332.747" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FBF351" stop-opacity="0.9"/>
                        <stop offset="0.953125" stop-color="#FBF351" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_14821_1424" x1="159.237" y1="347.654" x2="159.237" y2="165.337" gradientUnits="userSpaceOnUse">
                        <stop offset="0.104167" stop-color="#13141A" className='light' stop-opacity="0.9"/>
                        <stop offset="0.192708" stop-color="#121319" className='light' stop-opacity="0.85"/>
                        <stop offset="0.314319" stop-color="#121318" className='light' stop-opacity="0.8"/>
                        <stop offset="0.453125" stop-color="#0D0D11" className='light' stop-opacity="0.7"/>
                        <stop offset="0.770833" stop-color="#090A0D" stop-opacity="0.3"/>
                        <stop offset="0.911458" stop-color="#050607" stop-opacity="0.2"/>
                        <stop offset="1" stop-opacity="0.1"/>
                        </linearGradient>
                        </defs>
                        </svg>

                </div>
            </div>
            <div className='flex flex-col md:gap-[40px] gap-[20px]'>
                {cards}
            </div>
        </section>
    )
}