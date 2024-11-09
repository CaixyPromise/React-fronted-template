declare namespace API {
  type AboutMeVO = {
    userAccount?: string;
    userAvatar?: string;
    userEmail?: string;
    userGender?: number;
    userName?: string;
    userPhone?: string;
  };

  type AddUserVO = {
    id?: number;
    userAccount?: string;
    userName?: string;
    userPassword?: string;
  };

  type CaptchaVO = {
    codeImage?: string;
    uuid?: string;
  };

  type checkUsingGET1Params = {
    /** echostr */
    echostr?: string;
    /** nonce */
    nonce?: string;
    /** signature */
    signature?: string;
    /** timestamp */
    timestamp?: string;
  };

  type CpuInfo = {
    cpuName?: string;
    cpuNum?: number;
    freeRate?: number;
    sysUsageRate?: number;
    totalUsageRate?: number;
    userUsageRate?: number;
    waitRate?: number;
  };

  type DeleteRequest = {
    id?: number;
  };

  type downloadFileByIdUsingGET1Params = {
    /** bizName */
    bizName: string;
    /** id */
    id: string;
  };

  type EncryptAccountVO = {
    email?: string;
    phone?: string;
  };

  type forceLogoutUsingPOST1Params = {
    /** userId */
    userId: number;
  };

  type getOnlineUsersUsingGET1Params = {
    /** page */
    page?: number;
    /** size */
    size?: number;
  };

  type getPostVOByIdUsingGET1Params = {
    /** id */
    id?: number;
  };

  type getUserByIdUsingGET1Params = {
    /** id */
    id?: number;
  };

  type getUserVOByIdUsingGET1Params = {
    /** id */
    id?: number;
  };

  type initOAuthLoginUsingGET1Params = {
    redirectUri?: string;
    sessionId?: string;
    /** provider */
    provider: string;
  };

  type JvmInfo = {
    currentUsageMem?: number;
    free?: number;
    gcCount?: number;
    gcTime?: number;
    home?: string;
    inputArgs?: string;
    loadedClassCount?: number;
    maxMemSize?: number;
    name?: string;
    nonHeapMemory?: number;
    peakThreadCount?: number;
    runTime?: string;
    startTime?: string;
    threadCount?: number;
    totalLoadedClassCount?: number;
    totalStartedThreadCount?: number;
    unloadedClassCount?: number;
    usage?: number;
    used?: number;
    usedHeapMemory?: number;
    version?: string;
  };

  type LoginUserVO = {
    token?: string;
    userAccount?: string;
    userAvatar?: string;
    userEmail?: string;
    userGender?: number;
    userName?: string;
    userProfile?: string;
    userRole?: 'USER' | 'ADMIN' | 'BAN';
  };

  type MemInfo = {
    free?: number;
    total?: number;
    usage?: number;
    used?: number;
  };

  type oAuthLoginCallbackUsingGET1Params = {
    /** allParams */
    allParams: Record<string, any>;
    /** provider */
    provider: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PagePost_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Post[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PagePostVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: PostVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUser_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: User[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type Post = {
    content?: string;
    createTime?: string;
    favourNum?: number;
    id?: number;
    isDelete?: number;
    tags?: string;
    thumbNum?: number;
    title?: string;
    updateTime?: string;
    userId?: number;
  };

  type PostAddRequest = {
    content?: string;
    tags?: string[];
    title?: string;
  };

  type PostEditRequest = {
    content?: string;
    id?: number;
    tags?: string[];
    title?: string;
  };

  type PostFavourAddRequest = {
    postId?: number;
  };

  type PostFavourQueryRequest = {
    current?: number;
    pageSize?: number;
    postQueryRequest?: PostQueryRequest;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type PostQueryRequest = {
    content?: string;
    current?: number;
    favourUserId?: number;
    id?: number;
    notId?: number;
    orTags?: string[];
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    tags?: string[];
    title?: string;
    userId?: number;
  };

  type PostThumbAddRequest = {
    postId?: number;
  };

  type PostUpdateRequest = {
    content?: string;
    id?: number;
    tags?: string[];
    title?: string;
  };

  type PostVO = {
    content?: string;
    createTime?: string;
    favourNum?: number;
    hasFavour?: boolean;
    hasThumb?: boolean;
    id?: number;
    tagList?: string[];
    thumbNum?: number;
    title?: string;
    updateTime?: string;
    user?: UserVO;
    userId?: number;
  };

  type ResultAboutMeVO_ = {
    code?: number;
    data?: AboutMeVO;
    message?: string;
  };

  type ResultAddUserVO_ = {
    code?: number;
    data?: AddUserVO;
    message?: string;
  };

  type ResultBoolean_ = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type ResultCaptchaVO_ = {
    code?: number;
    data?: CaptchaVO;
    message?: string;
  };

  type ResultEncryptAccountVO_ = {
    code?: number;
    data?: EncryptAccountVO;
    message?: string;
  };

  type ResultInt_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type ResultLoginUserVO_ = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type ResultLong_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type ResultPagePost_ = {
    code?: number;
    data?: PagePost_;
    message?: string;
  };

  type ResultPagePostVO_ = {
    code?: number;
    data?: PagePostVO_;
    message?: string;
  };

  type ResultPageUser_ = {
    code?: number;
    data?: PageUser_;
    message?: string;
  };

  type ResultPageUserVO_ = {
    code?: number;
    data?: PageUserVO_;
    message?: string;
  };

  type ResultPostVO_ = {
    code?: number;
    data?: PostVO;
    message?: string;
  };

  type ResultServerInfo_ = {
    code?: number;
    data?: ServerInfo;
    message?: string;
  };

  type ResultString_ = {
    code?: number;
    data?: string;
    message?: string;
  };

  type ResultUser_ = {
    code?: number;
    data?: User;
    message?: string;
  };

  type ResultUserVO_ = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type SendEmailRequest = {
    extractParams?: Record<string, any>;
    scenes?: number;
    toEmail?: string;
  };

  type ServerInfo = {
    cpu?: CpuInfo;
    jvm?: JvmInfo;
    mem?: MemInfo;
    sys?: SysInfo;
    sysFiles?: SysFileInfo[];
    systemLoadInfo?: SystemLoadInfo;
  };

  type SysFileInfo = {
    dirName?: string;
    free?: string;
    sysTypeName?: string;
    total?: string;
    typeName?: string;
    usage?: number;
    used?: string;
  };

  type SysInfo = {
    computerIp?: string;
    computerName?: string;
    osArch?: string;
    osName?: string;
    userDir?: string;
  };

  type SystemLoadInfo = {
    loadAverage?: number;
  };

  type uploadFileUsingPOST1Params = {
    biz?: string;
  };

  type User = {
    createTime?: string;
    githubId?: number;
    githubUserName?: string;
    id?: number;
    isDelete?: number;
    mpOpenId?: string;
    unionId?: string;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userEmail?: string;
    userGender?: number;
    userName?: string;
    userPassword?: string;
    userPhone?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserAddRequest = {
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };

  type userLoginByWxOpenUsingGET1Params = {
    /** code */
    code: string;
  };

  type UserLoginRequest = {
    captcha?: string;
    captchaId?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserModifyPasswordRequest = {
    captchaCode?: string;
    confirmPassword?: string;
    newPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    id?: number;
    mpOpenId?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    unionId?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserRegisterRequest = {
    captcha?: string;
    captchaId?: string;
    checkPassword?: string;
    userAccount?: string;
    userEmail?: string;
    userName?: string;
    userPassword?: string;
    userPhone?: string;
  };

  type UserResetEmailRequest = {
    code?: string;
    password?: string;
  };

  type UserUpdateProfileRequest = {
    userGender?: number;
    userName?: string;
    userProfile?: string;
  };

  type UserUpdateRequest = {
    id?: number;
    userAvatar?: string;
    userGender?: number;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserVO = {
    browser?: string;
    createTime?: string;
    expireTime?: number;
    githubId?: number;
    githubUserName?: string;
    id?: number;
    isDelete?: number;
    loginIp?: string;
    loginLocation?: string;
    loginTime?: number;
    mpOpenId?: string;
    os?: string;
    sessionId?: string;
    token?: string;
    unionId?: string;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userEmail?: string;
    userGender?: number;
    userName?: string;
    userPhone?: string;
    userProfile?: string;
    userRole?: 'USER' | 'ADMIN' | 'BAN';
  };
}
