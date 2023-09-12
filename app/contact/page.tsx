import Link from "next/link"
import ContactForm from "../components/Contactform"
import GitHub from "../components/icons/socialmedia/github"
import Instagram from "../components/icons/socialmedia/instagram"
import Linkedin from "../components/icons/socialmedia/linkedin"
import Meetup from "../components/icons/socialmedia/meetup"
import SVGh2 from "../components/SVGh2"

export default function Contact(){
    return (
        <section className='min-h-[90vh] w-fit pb-10 lg:flex flex-row justify-between gap-[12rem] xl:gap-[20rem]'>
            <div className='flex flex-col gap-[40px]'>
                <div className='flex flex-row'>
                    <h1 className='text-lg text-white md:text-[3rem] lg:text-xl'>contact</h1>
                    <SVGh2/>
                </div>
                <div className='flex flex-col gap-[24px] lg:max-w-[40vw]'>
                    <p className='max-w-full'>
                    Have a project idea or need assistance with website development? Feel free to reach out if you're interested in collaborating or if you have any inquiries. 
                    </p>
                    <div className='lg:hidden flex flex-row gap-[12px] justify-around'>
                        <Link target='_blank' href='https://www.linkedin.com/in/93belen/'>
                            <Linkedin/>
                        </Link>
                        <Link target='_blank' href='https://github.com/93Belen'>
                            <GitHub/>
                        </Link>
                        <Link target='_blank' href='https://www.instagram.com/belen_dev/'>
                            <Instagram/>
                        </Link>
                        <Link target='_blank' href='/'>
                            <Meetup/>
                        </Link>
                    </div>
                </div>
                <ContactForm/>
            </div>
            <div className='hidden lg:flex flex-col gap-[3.62rem]'>
                <div>
                    <svg width="412" height="274" viewBox="0 0 412 274" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M314.132 76.7827L299.289 26.3593L322.723 68.1588L323.122 68.8715L323.539 68.2392L340.506 42.474L332.082 76.0294L331.784 77.2164L332.799 76.6599L371.654 55.3734L338.015 86.165L337.434 86.6967L338.189 87.0376L373.396 102.942L334.884 98.4547L334.226 98.378L334.402 99.0641L346.475 146.128L324.156 103.559L323.742 102.768L323.32 103.483L306.274 132.41L314.212 97.73L314.414 96.8499L313.587 97.0716L269.149 108.992L309.258 87.0044L309.981 86.6079L309.244 86.1137L279.353 66.078L313.561 77.3904L314.392 77.6653L314.132 76.7827Z" fill="#5544DC" stroke="#5544DC"/>
                    <path id='neonBorder' d="M69.6069 263.817L2.90256 120.834L340.563 57.5845L332.953 214.487L69.6069 263.817Z" stroke="#5544DC" stroke-width="4"/>
                    <path d="M55.0381 154.278C71.6622 154.278 85.1387 140.732 85.1387 124.023C85.1387 107.314 71.6622 93.7687 55.0381 93.7687C38.414 93.7687 24.9375 107.314 24.9375 124.023C24.9375 140.732 38.414 154.278 55.0381 154.278Z" fill="#FBF351"/>
                    <path d="M55.0386 148.46C71.0233 148.46 83.9815 135.435 83.9815 119.369C83.9815 103.302 71.0233 90.2777 55.0386 90.2777C39.0539 90.2777 26.0957 103.302 26.0957 119.369C26.0957 135.435 39.0539 148.46 55.0386 148.46Z" fill="#5544DC" stroke="#FBF351" stroke-miterlimit="10"/>
                    <path d="M60.0975 114.094C59.3935 113.667 58.6148 113.326 57.7615 113.07C56.9295 112.814 56.1295 112.686 55.3615 112.686C54.4655 112.686 53.7402 112.856 53.1855 113.198C52.6522 113.518 52.3855 114.019 52.3855 114.702C52.3855 115.384 52.6842 115.907 53.2815 116.27C53.9002 116.611 54.8282 116.963 56.0655 117.326C57.2388 117.667 58.1988 118.008 58.9455 118.35C59.6922 118.691 60.3215 119.192 60.8335 119.854C61.3668 120.515 61.6335 121.39 61.6335 122.478C61.6335 124.078 61.0255 125.294 59.8095 126.126C58.6148 126.958 57.1215 127.374 55.3295 127.374C54.0708 127.374 52.8442 127.171 51.6495 126.766C50.4762 126.36 49.4842 125.784 48.6735 125.038L49.7935 122.862C50.4975 123.502 51.3615 124.014 52.3855 124.398C53.4308 124.782 54.4442 124.974 55.4255 124.974C56.4068 124.974 57.1962 124.792 57.7935 124.43C58.3908 124.067 58.6895 123.512 58.6895 122.766C58.6895 121.998 58.3695 121.422 57.7295 121.038C57.1108 120.654 56.1615 120.27 54.8815 119.886C53.7508 119.566 52.8228 119.246 52.0975 118.926C51.3935 118.584 50.7855 118.094 50.2735 117.454C49.7828 116.814 49.5375 115.982 49.5375 114.958C49.5375 113.379 50.1135 112.195 51.2655 111.406C52.4175 110.616 53.8575 110.222 55.5855 110.222C56.6095 110.222 57.6122 110.371 58.5935 110.67C59.5962 110.947 60.4602 111.331 61.1855 111.822L60.0975 114.094Z" fill="white"/>
                    <path d="M115.239 154.278C131.863 154.278 145.34 140.732 145.34 124.023C145.34 107.314 131.863 93.7687 115.239 93.7687C98.6152 93.7687 85.1387 107.314 85.1387 124.023C85.1387 140.732 98.6152 154.278 115.239 154.278Z" fill="#FBF351"/>
                    <path d="M115.24 148.46C131.224 148.46 144.183 135.435 144.183 119.369C144.183 103.302 131.224 90.2777 115.24 90.2777C99.255 90.2777 86.2969 103.302 86.2969 119.369C86.2969 135.435 99.255 148.46 115.24 148.46Z" fill="#5544DC" stroke="#FBF351" stroke-miterlimit="10"/>
                    <path d="M114.89 110.254C116.575 110.254 118.068 110.616 119.37 111.342C120.692 112.067 121.716 113.08 122.442 114.382C123.188 115.662 123.562 117.134 123.562 118.798C123.562 120.462 123.188 121.944 122.442 123.246C121.716 124.547 120.692 125.56 119.37 126.286C118.068 127.011 116.575 127.374 114.89 127.374C113.183 127.374 111.668 127.011 110.346 126.286C109.044 125.56 108.02 124.558 107.274 123.278C106.548 121.976 106.186 120.483 106.186 118.798C106.186 117.134 106.548 115.662 107.274 114.382C108.02 113.08 109.044 112.067 110.346 111.342C111.668 110.616 113.183 110.254 114.89 110.254ZM114.89 112.846C113.78 112.846 112.788 113.102 111.914 113.614C111.06 114.126 110.388 114.84 109.898 115.758C109.428 116.654 109.194 117.678 109.194 118.83C109.194 120.003 109.428 121.048 109.898 121.966C110.388 122.883 111.06 123.598 111.914 124.11C112.788 124.6 113.78 124.846 114.89 124.846C115.978 124.846 116.948 124.6 117.802 124.11C118.676 123.598 119.348 122.883 119.818 121.966C120.308 121.048 120.554 120.003 120.554 118.83C120.554 117.678 120.308 116.654 119.818 115.758C119.348 114.84 118.676 114.126 117.802 113.614C116.948 113.102 115.978 112.846 114.89 112.846Z" fill="white"/>
                    <path d="M175.44 154.278C192.065 154.278 205.541 140.732 205.541 124.023C205.541 107.314 192.065 93.7687 175.44 93.7687C158.816 93.7687 145.34 107.314 145.34 124.023C145.34 140.732 158.816 154.278 175.44 154.278Z" fill="#FBF351"/>
                    <path d="M175.441 148.46C191.426 148.46 204.384 135.435 204.384 119.369C204.384 103.302 191.426 90.2777 175.441 90.2777C159.456 90.2777 146.498 103.302 146.498 119.369C146.498 135.435 159.456 148.46 175.441 148.46Z" fill="#5544DC" stroke="#FBF351" stroke-miterlimit="10"/>
                    <path d="M181.722 114.862C180.378 113.56 178.767 112.91 176.89 112.91C175.78 112.91 174.788 113.155 173.914 113.646C173.06 114.136 172.388 114.83 171.898 115.726C171.407 116.622 171.161 117.656 171.161 118.83C171.161 120.003 171.396 121.038 171.866 121.934C172.356 122.83 173.018 123.534 173.85 124.046C174.703 124.536 175.674 124.782 176.762 124.782C177.85 124.782 178.831 124.6 179.706 124.238C180.58 123.875 181.306 123.352 181.882 122.67L183.578 124.398C182.81 125.358 181.828 126.094 180.634 126.606C179.46 127.118 178.127 127.374 176.634 127.374C174.991 127.374 173.53 127.011 172.25 126.286C170.97 125.56 169.967 124.558 169.242 123.278C168.538 121.976 168.186 120.494 168.186 118.83C168.186 117.166 168.538 115.683 169.242 114.382C169.967 113.08 170.97 112.067 172.25 111.342C173.53 110.616 174.991 110.254 176.634 110.254C178.063 110.254 179.343 110.478 180.474 110.926C181.626 111.352 182.586 111.982 183.354 112.814L181.722 114.862Z" fill="white"/>
                    <path d="M235.642 154.278C252.266 154.278 265.742 140.732 265.742 124.023C265.742 107.314 252.266 93.7687 235.642 93.7687C219.018 93.7687 205.541 107.314 205.541 124.023C205.541 140.732 219.018 154.278 235.642 154.278Z" fill="#FBF351"/>
                    <path d="M235.642 148.46C251.627 148.46 264.585 135.435 264.585 119.369C264.585 103.302 251.627 90.2777 235.642 90.2777C219.657 90.2777 206.699 103.302 206.699 119.369C206.699 135.435 219.657 148.46 235.642 148.46Z" fill="#5544DC" stroke="#FBF351" stroke-miterlimit="10"/>
                    <path d="M233.849 110.35H236.825V127.278H233.849V110.35ZM235.321 103.598C235.854 103.598 236.291 103.779 236.633 104.142C236.995 104.504 237.177 104.963 237.177 105.518C237.177 106.072 236.995 106.531 236.633 106.894C236.291 107.256 235.854 107.438 235.321 107.438C234.787 107.438 234.339 107.256 233.977 106.894C233.635 106.531 233.465 106.072 233.465 105.518C233.465 104.963 233.635 104.504 233.977 104.142C234.339 103.779 234.787 103.598 235.321 103.598Z" fill="white"/>
                    <path d="M295.843 154.278C312.467 154.278 325.943 140.732 325.943 124.023C325.943 107.314 312.467 93.7687 295.843 93.7687C279.219 93.7687 265.742 107.314 265.742 124.023C265.742 140.732 279.219 154.278 295.843 154.278Z" fill="#FBF351"/>
                    <path d="M295.843 148.46C311.828 148.46 324.786 135.435 324.786 119.369C324.786 103.302 311.828 90.2777 295.843 90.2777C279.859 90.2777 266.9 103.302 266.9 119.369C266.9 135.435 279.859 148.46 295.843 148.46Z" fill="#5544DC" stroke="#FBF351" stroke-miterlimit="10"/>
                    <path d="M299.186 127.278V124.91C297.927 126.574 295.954 127.406 293.266 127.406C292.092 127.406 291.058 127.182 290.161 126.734C289.287 126.286 288.604 125.667 288.114 124.878C287.644 124.088 287.41 123.203 287.41 122.222C287.41 120.707 287.964 119.512 289.074 118.638C290.204 117.742 291.772 117.283 293.778 117.262H299.154V116.462C299.154 115.267 298.78 114.35 298.034 113.71C297.308 113.048 296.242 112.718 294.834 112.718C293.127 112.718 291.388 113.326 289.618 114.542L288.37 112.494C289.586 111.704 290.706 111.139 291.73 110.798C292.775 110.435 294.012 110.254 295.442 110.254C297.554 110.254 299.186 110.776 300.338 111.822C301.49 112.846 302.076 114.286 302.097 116.142L302.13 127.278H299.186ZM293.874 124.942C295.26 124.942 296.434 124.611 297.394 123.95C298.375 123.267 298.962 122.371 299.154 121.262V119.566H294.194C292.85 119.566 291.847 119.768 291.186 120.174C290.546 120.579 290.226 121.219 290.226 122.094C290.226 122.968 290.556 123.662 291.218 124.174C291.879 124.686 292.764 124.942 293.874 124.942Z" fill="white"/>
                    <path d="M356.044 154.278C372.668 154.278 386.145 140.732 386.145 124.023C386.145 107.314 372.668 93.7687 356.044 93.7687C339.42 93.7687 325.943 107.314 325.943 124.023C325.943 140.732 339.42 154.278 356.044 154.278Z" fill="#FBF351"/>
                    <path d="M356.044 148.46C372.029 148.46 384.987 135.435 384.987 119.369C384.987 103.302 372.029 90.2777 356.044 90.2777C340.06 90.2777 327.102 103.302 327.102 119.369C327.102 135.435 340.06 148.46 356.044 148.46Z" fill="#5544DC" stroke="#FBF351" stroke-miterlimit="10"/>
                    <path d="M355.01 103.534H357.986V127.278H355.01V103.534Z" fill="white"/>
                    <path d="M85.5408 226.064C102.109 226.064 115.541 212.564 115.541 195.911C115.541 179.257 102.109 165.757 85.5408 165.757C68.9722 165.757 55.5408 179.257 55.5408 195.911C55.5408 212.564 68.9722 226.064 85.5408 226.064Z" fill="#FBF351"/>
                    <path d="M85.5413 220.265C101.473 220.265 114.387 207.284 114.387 191.272C114.387 175.259 101.473 162.278 85.5413 162.278C69.6099 162.278 56.6951 175.259 56.6951 191.272C56.6951 207.284 69.6099 220.265 85.5413 220.265Z" fill="#5544DC" stroke="#FBF351" stroke-miterlimit="10"/>
                    <path d="M93.3088 182.609C95.2501 182.609 96.7754 183.196 97.8848 184.369C98.9941 185.542 99.5488 187.142 99.5488 189.169V199.633H96.5408V189.969C96.5408 188.54 96.1461 187.42 95.3568 186.609C94.5888 185.798 93.5221 185.393 92.1568 185.393C90.5568 185.436 89.2981 186.001 88.3808 187.089C87.4634 188.177 87.0048 189.574 87.0048 191.281V199.633H83.9968V189.969C83.9968 188.54 83.6128 187.42 82.8448 186.609C82.0768 185.798 80.9994 185.393 79.6128 185.393C78.0128 185.436 76.7434 186.001 75.8048 187.089C74.8874 188.177 74.4288 189.574 74.4288 191.281V199.633H71.4528V182.705H74.4288V186.257C75.5381 183.868 77.6394 182.652 80.7328 182.609C82.2901 182.609 83.5808 182.982 84.6048 183.729C85.6501 184.476 86.3541 185.521 86.7168 186.865C87.7621 184.07 89.9594 182.652 93.3088 182.609Z" fill="white"/>
                    <path d="M145.541 226.064C162.109 226.064 175.541 212.564 175.541 195.911C175.541 179.257 162.109 165.757 145.541 165.757C128.972 165.757 115.541 179.257 115.541 195.911C115.541 212.564 128.972 226.064 145.541 226.064Z" fill="#FBF351"/>
                    <path d="M145.541 220.265C161.473 220.265 174.387 207.284 174.387 191.272C174.387 175.259 161.473 162.278 145.541 162.278C129.61 162.278 116.695 175.259 116.695 191.272C116.695 207.284 129.61 220.265 145.541 220.265Z" fill="#5544DC" stroke="#FBF351" stroke-miterlimit="10"/>
                    <path d="M146.237 182.254C148.861 182.254 150.845 183.032 152.189 184.59C153.533 186.126 154.205 188.27 154.205 191.022C154.205 191.448 154.194 191.768 154.173 191.982H140.797C141.031 193.496 141.661 194.702 142.685 195.598C143.73 196.494 145.01 196.942 146.525 196.942C147.527 196.942 148.455 196.76 149.309 196.398C150.183 196.035 150.941 195.523 151.581 194.862L153.213 196.558C152.381 197.454 151.378 198.147 150.205 198.638C149.031 199.128 147.73 199.374 146.301 199.374C144.637 199.374 143.154 199.022 141.853 198.318C140.573 197.592 139.57 196.579 138.845 195.278C138.141 193.976 137.789 192.494 137.789 190.83C137.789 189.166 138.141 187.694 138.845 186.414C139.57 185.112 140.573 184.099 141.853 183.374C143.133 182.627 144.594 182.254 146.237 182.254ZM151.517 189.678C151.431 188.142 150.919 186.936 149.981 186.062C149.042 185.166 147.805 184.718 146.269 184.718C144.775 184.718 143.527 185.166 142.525 186.062C141.543 186.958 140.957 188.163 140.765 189.678H151.517Z" fill="white"/>
                    <path d="M205.541 226.064C222.109 226.064 235.541 212.564 235.541 195.911C235.541 179.257 222.109 165.757 205.541 165.757C188.972 165.757 175.541 179.257 175.541 195.911C175.541 212.564 188.972 226.064 205.541 226.064Z" fill="#FBF351"/>
                    <path d="M205.541 220.265C221.473 220.265 234.387 207.284 234.387 191.272C234.387 175.259 221.473 162.278 205.541 162.278C189.61 162.278 176.695 175.259 176.695 191.272C176.695 207.284 189.61 220.265 205.541 220.265Z" fill="#5544DC" stroke="#FBF351" stroke-miterlimit="10"/>
                    <path d="M213.229 175.534V199.278H210.253V195.918C209.613 197.048 208.749 197.923 207.661 198.542C206.594 199.139 205.346 199.438 203.917 199.438C202.317 199.438 200.898 199.075 199.661 198.35C198.445 197.603 197.495 196.579 196.813 195.278C196.13 193.955 195.789 192.451 195.789 190.766C195.789 189.102 196.13 187.63 196.813 186.35C197.495 185.048 198.445 184.035 199.661 183.31C200.898 182.584 202.306 182.222 203.885 182.222C205.335 182.222 206.605 182.52 207.693 183.118C208.781 183.715 209.634 184.579 210.253 185.71V175.534H213.229ZM204.525 196.878C205.634 196.878 206.615 196.622 207.469 196.11C208.343 195.598 209.026 194.883 209.517 193.966C210.007 193.048 210.253 192.014 210.253 190.862C210.253 189.688 210.007 188.643 209.517 187.726C209.026 186.808 208.343 186.094 207.469 185.582C206.615 185.07 205.634 184.814 204.525 184.814C203.415 184.814 202.423 185.08 201.549 185.614C200.695 186.126 200.023 186.84 199.533 187.758C199.042 188.675 198.797 189.71 198.797 190.862C198.797 192.014 199.042 193.048 199.533 193.966C200.023 194.883 200.695 195.598 201.549 196.11C202.423 196.622 203.415 196.878 204.525 196.878Z" fill="white"/>
                    <path d="M265.541 226.064C282.11 226.064 295.541 212.564 295.541 195.911C295.541 179.257 282.11 165.757 265.541 165.757C248.972 165.757 235.541 179.257 235.541 195.911C235.541 212.564 248.972 226.064 265.541 226.064Z" fill="#FBF351"/>
                    <path d="M265.542 220.265C281.473 220.265 294.388 207.284 294.388 191.272C294.388 175.259 281.473 162.278 265.542 162.278C249.61 162.278 236.695 175.259 236.695 191.272C236.695 207.284 249.61 220.265 265.542 220.265Z" fill="#5544DC" stroke="#FBF351" stroke-miterlimit="10"/>
                    <path d="M264.453 182.35H267.429V199.278H264.453V182.35ZM265.925 175.598C266.458 175.598 266.896 175.779 267.237 176.142C267.6 176.504 267.781 176.963 267.781 177.518C267.781 178.072 267.6 178.531 267.237 178.894C266.896 179.256 266.458 179.438 265.925 179.438C265.392 179.438 264.944 179.256 264.581 178.894C264.24 178.531 264.069 178.072 264.069 177.518C264.069 176.963 264.24 176.504 264.581 176.142C264.944 175.779 265.392 175.598 265.925 175.598Z" fill="white"/>
                    <path d="M325.541 226.064C342.11 226.064 355.541 212.564 355.541 195.911C355.541 179.257 342.11 165.757 325.541 165.757C308.973 165.757 295.541 179.257 295.541 195.911C295.541 212.564 308.973 226.064 325.541 226.064Z" fill="#FBF351"/>
                    <path d="M325.542 220.265C341.473 220.265 354.388 207.284 354.388 191.272C354.388 175.259 341.473 162.278 325.542 162.278C309.61 162.278 296.696 175.259 296.696 191.272C296.696 207.284 309.61 220.265 325.542 220.265Z" fill="#5544DC" stroke="#FBF351" stroke-miterlimit="10"/>
                    <path d="M329.789 199.278V196.91C328.53 198.574 326.557 199.406 323.869 199.406C322.696 199.406 321.661 199.182 320.765 198.734C319.89 198.286 319.208 197.667 318.717 196.878C318.248 196.088 318.013 195.203 318.013 194.222C318.013 192.707 318.568 191.512 319.677 190.638C320.808 189.742 322.376 189.283 324.381 189.262H329.757V188.462C329.757 187.267 329.384 186.35 328.637 185.71C327.912 185.048 326.845 184.718 325.437 184.718C323.73 184.718 321.992 185.326 320.221 186.542L318.973 184.494C320.189 183.704 321.309 183.139 322.333 182.798C323.378 182.435 324.616 182.254 326.045 182.254C328.157 182.254 329.789 182.776 330.941 183.822C332.093 184.846 332.68 186.286 332.701 188.142L332.733 199.278H329.789ZM324.477 196.942C325.864 196.942 327.037 196.611 327.997 195.95C328.978 195.267 329.565 194.371 329.757 193.262V191.566H324.797C323.453 191.566 322.45 191.768 321.789 192.174C321.149 192.579 320.829 193.219 320.829 194.094C320.829 194.968 321.16 195.662 321.821 196.174C322.482 196.686 323.368 196.942 324.477 196.942Z" fill="white"/>
                    <g clip-path="url(#clip0_14868_1558)">
                    <path d="M315.361 76.7863L300.445 38.0169L323.013 69.7907L323.419 70.3631L323.827 69.7918L338.715 48.9411L331.89 75.5683L331.613 76.6492L332.604 76.1366L367.554 58.0602L337.708 83.2951L337.033 83.8657L337.87 84.1503L370.256 95.1669L335.175 93.1232L334.434 93.08L334.672 93.7829L346.964 130.025L325.376 97.5789L324.951 96.9398L324.538 97.587L309.665 120.917L316.012 93.4346L316.2 92.62L315.394 92.8397L275.193 103.785L311.068 85.2184L311.923 84.7759L311.069 84.3309L283.532 69.9845L314.778 77.4522L315.703 77.673L315.361 76.7863Z" fill="#FBF351" stroke="#5544DC"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_14868_1558">
                    <rect width="82.8432" height="98.0788" fill="white" transform="translate(267.209 111.654) rotate(-73.8241)"/>
                    </clipPath>
                    </defs>
                    </svg>
                </div>
                    <div className='flex flex-row gap-[12px] justify-around'>
                        <Link href='/'>
                            <Linkedin/>
                        </Link>
                        <Link href='/'>
                            <GitHub/>
                        </Link>
                        <Link href='/'>
                            <Instagram/>
                        </Link>
                        <Link href='/'>
                            <Meetup/>
                        </Link>
    </div>
</div>
        </section>
    )
}