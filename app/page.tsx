import SVGh2 from "./components/SVGh2";

export default function Home() {
  return (
    <section className='min-h-[100vh] bg-black flex flex-col lg:flex-row lg:justify-between'>
      <section className='flex flex-col gap-[24px]'>
      <div className='flex flex-col gap-[40px] lg:max-w-[50vw]'>
        <div className='pt-[24px] md:pt-[10vh]'>
          <div className='flex flex-row'>
            <h1 className='text-lg text-white md:text-[3rem] lg:text-xl'>hey, I'm</h1>
            <SVGh2/>
          </div>
          <h1 className='text-lg text-white md:text-[3rem] lg:text-xl'>belén, your <br/> software developer</h1>
        </div>
        <p className='text-white text-md'>Passionate about crafting innovative solutions. With a background in Next JS, React, AWS, Prisma, Tailwind CSS, and Git, I specialize in front-end developing, delivering clean and scalable code.</p>
     </div>
     <button className='bg-purple w-[13.25rem] h-[4rem] cursor-pointer'>
        <div className='border-2 border-white w-[13.25rem] h-[4rem] relative left-2 top-2 flex justify-center z-0 hover:left-1 hover:top-1 duration-100'>
          <p className='text-white self-center text-md'>More about me</p>
        </div>
     </button>
      </section>
     <div className='pt-[80px] pb-[40px] lg:hidden floating-svg'>
        <svg xmlns="http://www.w3.org/2000/svg" width="149" height="177" viewBox="0 0 149 177" fill="none">
          <path d="M39.004 141.531L32.4001 134.947" stroke="white"/>
          <path d="M97.7054 112.246L89.2671 108.087" stroke="white"/>
          <path d="M108.028 15.7692C108.028 24.1339 100.113 31.0385 90.1844 31.0385C80.2558 31.0385 72.3403 24.1339 72.3403 15.7692C72.3403 7.40456 80.2558 0.5 90.1844 0.5C100.113 0.5 108.028 7.40456 108.028 15.7692Z" stroke="white"/>
          <path d="M120.334 77.864L118.305 70.73L120.703 69.512L127.158 82.04L120.334 76.124V77.864Z" fill="#5544DC"/>
          <path d="M131.4 14.528L136.934 13.136L137.118 14.354L136.565 14.876L133.245 16.094C132.63 16.21 131.29 16.3376 130.847 15.92C130.404 15.5024 131.031 14.818 131.4 14.528Z" fill="#5544DC"/>
          <path d="M136.011 18.182L135.827 17.138L131.216 18.878L130.294 19.922L131.216 20.792L135.089 19.4L136.011 18.182Z" fill="#5544DC"/>
          <path d="M75.6989 47.414C78.0966 50.314 83.1503 56.3228 84.1832 57.158C85.2161 57.9932 91.7453 61.798 94.8808 63.596C97.6474 65.394 103.476 69.0248 104.656 69.164C105.837 69.3032 114.247 70.266 118.305 70.73M118.305 70.73L120.334 77.864V76.124L127.158 82.04L120.703 69.512M118.305 70.73L120.703 69.512M120.703 69.512C120.457 68.816 119.633 67.3544 118.305 67.076C116.645 66.728 108.714 62.552 107.607 62.204C106.722 61.9256 102.443 60.232 100.414 59.42C98.5696 57.448 94.8808 53.2952 94.8808 52.46C94.8808 51.6248 90.8231 47.008 88.7942 44.804M76.0678 95.264C77.4818 93.35 80.3099 89.4176 80.3099 89V87.956M76.0678 95.264C74.1619 99.034 70.2763 106.748 69.9812 107.444C69.6861 108.14 64.8168 115.738 62.4191 119.45C61.4969 121.074 59.5418 124.461 59.0991 125.018C58.6565 125.575 57.931 128.73 57.6236 130.238L52.4592 133.892L38.8105 141.896V143.81L14.8331 159.992C14.6487 161.036 14.206 163.124 13.9109 163.124C13.542 163.124 9.66876 167.474 9.11543 168.17C8.67277 168.727 6.10289 170.374 4.87327 171.128C4.13551 172.752 2.51242 176 1.92221 176H1V168.866L4.87327 163.124L3.95107 161.732L6.53325 157.208L11.5132 158.252C12.8657 156.222 16.0136 151.57 17.7842 149.204C19.9975 146.246 24.4241 141.374 26.0841 139.982C27.412 138.868 32.1706 135.458 34.3839 133.892C35.8595 132.442 39.1056 129.298 40.2861 128.324C41.4665 127.35 45.0816 125.25 46.7415 124.322C47.2949 120.842 48.4753 113.464 48.7704 111.794C49.0655 110.124 50.2459 106.574 50.7992 105.008C51.2296 101.644 52.1641 94.568 52.4592 93.176C52.8281 91.436 55.0414 84.476 55.9636 83.258C56.7014 82.2836 58.7302 79.836 59.6524 78.734L72.1945 68.816C72.3789 68.236 72.8216 66.902 73.1167 66.206C73.4118 65.51 74.9611 64.64 75.6989 64.292C74.8996 57.738 74.1548 44.22 74.2233 42.02C74.4078 36.104 81.2936 34.306 82.7077 33.146V31.754C84.4906 31.29 85.4374 31.3016 88.2409 30.884C91.0444 30.4664 95.3112 31.986 97.0941 32.798V35.93C97.8933 40.802 101.152 54.722 97.6474 56.114M76.0678 95.264C78.3425 96.366 82.929 98.57 83.0765 98.57C83.2241 98.57 91.0075 100.89 94.8808 102.05C93.9586 102.688 91.9666 104.173 91.3764 105.008C90.7862 105.843 89.655 107.908 89.1631 108.836L79.7566 122.93M97.2785 36.104C98.5082 36.336 101.115 36.8 101.705 36.8C102.295 36.8 103.55 37.728 104.103 38.192C106.316 38.366 110.964 38.7488 111.849 38.888C112.735 39.0272 115.169 38.946 116.276 38.888C117.383 39.584 119.596 41.1152 119.596 41.672M116.46 38.888C117.321 38.018 119.116 36.0344 119.412 35.06C119.78 33.842 123.838 25.316 124.391 24.62C124.834 24.0632 125.806 23.46 126.236 23.228L129.74 26.36M129.74 26.36C129.556 27.23 129.187 29.144 129.187 29.84C129.187 30.71 127.343 33.842 127.158 35.06C126.974 36.278 125.683 37.322 125.498 38.888C125.314 40.454 124.945 42.716 124.391 42.89C123.838 43.064 122.547 45.5 122.178 45.5L119.412 46.718L99.123 47.414M129.74 26.36L130.478 24.62L129.74 23.228C129.925 21.894 130.33 19.052 130.478 18.356M83.261 125.192L99.4918 111.098L103.918 105.008C104.718 103.79 106.353 101.215 106.501 100.658C106.685 99.962 107.607 99.092 106.501 97.178C105.394 95.264 100.967 90.74 99.4918 90.566C98.3114 90.4268 92.1142 85.636 89.1631 83.258L88.2409 68.816L93.2208 62.552M88.7942 109.358C87.5653 110.585 81.5881 120.087 79.8706 122.756C78.4967 124.891 79.6539 123.731 78.5884 125.57L75.2754 124.362L73.1949 128.481L73.7225 129.828L70.6765 135.028L70.1656 141.712L70.793 141.755C71.1945 141.782 72.5312 138.814 73.1494 137.327C74.0398 136.677 75.906 135.253 76.247 134.752C76.6733 134.125 79.6197 130.229 79.8706 130.246C80.0714 130.26 80.522 128.324 80.7223 127.354L97.6474 112.49M126.42 23.228C126.728 22.126 127.343 19.7828 127.343 19.226V15.224L131.769 11.918V13.484L129.74 15.746C130.048 16.326 130.626 17.66 130.478 18.356M130.478 18.356L131.216 18.704L135.274 17.312L136.196 16.442L136.565 15.05M130.478 18.356L130.662 17.486L132.138 16.442L136.196 15.05M129.925 13.31L129.556 12.962H128.449C128.388 12.962 128.228 12.8576 128.08 12.44C127.933 12.0224 128.265 11.222 128.449 10.874L138.04 6.698L144.127 2L148 7.568L138.778 9.482L138.04 10.352V11.222L133.245 11.918C133.06 12.15 132.802 12.6836 133.245 12.962C133.687 13.2404 136.257 13.078 137.487 12.962L138.04 12.44V11.396M133.982 20.096V22.532C133.675 22.996 132.913 23.9588 132.322 24.098C131.732 24.2372 130.847 24.272 130.478 24.272M136.934 13.136L131.4 14.528C131.031 14.818 130.404 15.5024 130.847 15.92C131.29 16.3376 132.63 16.21 133.245 16.094L136.565 14.876L137.118 14.354L136.934 13.136ZM135.827 17.138L136.011 18.182L135.089 19.4L131.216 20.792L130.294 19.922L131.216 18.878L135.827 17.138Z" stroke="white"/>
          <path d="M96.655 32.4045C96.6549 32.4045 96.6548 32.4045 96.6547 32.4044C96.2314 32.2717 95.6269 32.0953 94.8976 31.919C93.4425 31.5672 91.4742 31.2119 89.4505 31.2119C87.4665 31.2119 85.712 31.2991 84.4532 31.3863C83.8305 31.4295 83.3287 31.4727 82.9797 31.5054V29.7401C83.0447 29.7342 83.1161 29.7277 83.1933 29.7208C83.6108 29.6836 84.1988 29.6347 84.8795 29.5877C86.244 29.4934 87.9691 29.408 89.4399 29.4391C90.8838 29.4697 92.7865 29.683 94.3416 29.8914C95.1162 29.9953 95.7995 30.0972 96.289 30.1732C96.4272 30.1946 96.55 30.214 96.655 30.2308V32.4045Z" fill="#5544DC" stroke="white"/>
        </svg>
     </div>
     <div className='hidden lg:block pt-[24px] md:pt-[10vh] floating-svg'>
     <svg width="400" height="507" viewBox="0 0 400 507" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M297 408.37L315 389.37" stroke="white"/>
      <path d="M137 323.87L160 311.87" stroke="white"/>
      <path d="M108 45.5C108 70.3095 130.116 90.5 157.5 90.5C184.884 90.5 207 70.3095 207 45.5C207 20.6905 184.884 0.5 157.5 0.5C130.116 0.5 108 20.6905 108 45.5Z" stroke="white"/>
      <path d="M76 224L81.5 203.5L75 200L57.5 236L76 219V224Z" fill="#5544DC"/>
      <path d="M46 42L31 38L30.5 41.5L32 43L41 46.5C42.6667 46.8333 46.3 47.2 47.5 46C48.7 44.8 47 42.8333 46 42Z" fill="#5544DC"/>
      <path d="M33.5 52.5L34 49.5L46.5 54.5L49 57.5L46.5 60L36 56L33.5 52.5Z" fill="#5544DC"/>
      <path d="M197 136.5C190.5 144.833 176.8 162.1 174 164.5C171.2 166.9 153.5 177.833 145 183C137.5 188.167 121.7 198.6 118.5 199C115.3 199.4 92.5 202.167 81.5 203.5M81.5 203.5L76 224V219L57.5 236L75 200M81.5 203.5L75 200M75 200C75.6667 198 77.9 193.8 81.5 193C86 192 107.5 180 110.5 179C112.9 178.2 124.5 173.333 130 171C135 165.333 145 153.4 145 151C145 148.6 156 135.333 161.5 129M196 274C192.167 268.5 184.5 257.2 184.5 256V253M196 274C201.167 284.833 211.7 307 212.5 309C213.3 311 226.5 332.833 233 343.5C235.5 348.167 240.8 357.9 242 359.5C243.2 361.1 245.167 370.167 246 374.5L260 385L297 408V413.5L362 460C362.5 463 363.7 469 364.5 469C365.5 469 376 481.5 377.5 483.5C378.7 485.1 385.667 489.833 389 492C391 496.667 395.4 506 397 506H399.5V485.5L389 469L391.5 465L384.5 452L371 455C367.333 449.167 358.8 435.8 354 429C348 420.5 336 406.5 331.5 402.5C327.9 399.3 315 389.5 309 385C305 380.833 296.2 371.8 293 369C289.8 366.2 280 360.167 275.5 357.5C274 347.5 270.8 326.3 270 321.5C269.2 316.7 266 306.5 264.5 302C263.333 292.333 260.8 272 260 268C259 263 253 243 250.5 239.5C248.5 236.7 243 229.667 240.5 226.5L206.5 198C206 196.333 204.8 192.5 204 190.5C203.2 188.5 199 186 197 185C199.167 166.167 201.186 127.322 201 121C200.5 104 181.833 98.8333 178 95.5V91.5C173.167 90.1667 170.6 90.1999 163 88.9999C155.4 87.7999 143.833 92.1666 139 94.4999V103.5C136.833 117.5 128 157.5 137.5 161.5M196 274C189.833 277.167 177.4 283.5 177 283.5C176.6 283.5 155.5 290.167 145 293.5C147.5 295.333 152.9 299.6 154.5 302C156.1 304.4 159.167 310.333 160.5 313L186 353.5M138.5 104C135.167 104.667 128.1 106 126.5 106C124.9 106 121.5 108.667 120 110C114 110.5 101.4 111.6 99 112C96.6 112.4 90 112.167 87 112C84 114 78 118.4 78 120M86.5 112C84.1667 109.5 79.3 103.8 78.5 101C77.5 97.5 66.5 73 65 71C63.8 69.4 61.1667 67.6667 60 67L50.5 76M50.5 76C51 78.5 52 84 52 86C52 88.5 57 97.5 57.5 101C58 104.5 61.5 107.5 62 112C62.5 116.5 63.5 123 65 123.5C66.5 124 70 131 71 131L78.5 134.5L133.5 136.5M50.5 76L48.5 71L50.5 67C50 63.1667 48.9 55 48.5 53M176.5 360L132.5 319.5L120.5 302C118.333 298.5 113.9 291.1 113.5 289.5C113 287.5 110.5 285 113.5 279.5C116.5 274 128.5 261 132.5 260.5C135.7 260.1 152.5 246.333 160.5 239.5L163 198L149.5 180M161.5 314.5C164.831 318.027 181.035 345.33 185.691 353C189.416 359.136 186.278 355.801 189.167 361.087L198.148 357.614L203.788 369.451L202.358 373.321L210.615 388.265L212 407.472L210.299 407.595C209.211 407.674 205.587 399.145 203.911 394.87C201.497 393.004 196.438 388.911 195.514 387.471C194.358 385.67 186.371 374.474 185.691 374.523C185.147 374.562 183.925 368.999 183.382 366.213L137.5 323.5M59.5 67C58.6667 63.8333 57 57.1 57 55.5V44L45 34.5V39L50.5 45.5C49.6667 47.1667 48.1 51 48.5 53M48.5 53L46.5 54L35.5 50L33 47.5L32 43.5M48.5 53L48 50.5L44 47.5L33 43.5M50.0001 38.5L51.0001 37.5H54.0001C54.1667 37.5 54.6001 37.2 55.0001 36C55.4001 34.8 54.5001 32.5 54.0001 31.5L28 19.5L11.5 6L1 22L26 27.5L28 30V32.5L41 34.5C41.5 35.1667 42.2 36.7 41 37.5C39.8 38.3 32.8333 37.8333 29.5 37.5L28 36V33M39 58V65C39.8333 66.3333 41.9 69.1 43.5 69.5C45.1 69.9 47.5 70 48.5 70M31 38L46 42C47 42.8333 48.7 44.8 47.5 46C46.3 47.2 42.6667 46.8333 41 46.5L32 43L30.5 41.5L31 38ZM34 49.5L33.5 52.5L36 56L46.5 60L49 57.5L46.5 54.5L34 49.5Z" stroke="white"/>
      <path d="M139 94.7832C139.288 94.6804 139.662 94.5503 140.114 94.4005C141.253 94.0225 142.882 93.519 144.849 93.0157C148.779 92.0099 154.074 91.0001 159.5 91.0001C164.884 91.0001 169.647 91.2507 173.063 91.5014C174.772 91.6268 176.145 91.7522 177.091 91.8463C177.461 91.8831 177.766 91.9152 178 91.9406V84.9505C177.989 84.9494 177.978 84.9482 177.967 84.9471C177.655 84.9152 177.2 84.8699 176.629 84.816C175.487 84.7083 173.878 84.5665 172.016 84.4304C168.289 84.158 163.558 83.9093 159.511 83.9999C155.526 84.0892 150.301 84.7105 146.058 85.3126C143.939 85.6132 142.071 85.9082 140.733 86.1281C140.063 86.2381 139.527 86.3292 139.158 86.3928C139.101 86.4025 139.049 86.4116 139 86.42V94.7832Z" fill="#5544DC" stroke="white"/>
      </svg>
     </div>
    </section>
  )
}
