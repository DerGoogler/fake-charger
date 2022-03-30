#include <jni.h>
#include <iostream>
#include <stdexcept>
#include <cstdio>
#include <string>
#include <sstream>

void addToStream(std::ostringstream &) {
}

template<typename T, typename... Args>
void addToStream(std::ostringstream &a_stream, T &&a_value, Args &&... a_args) {
    a_stream << std::forward<T>(a_value);
    addToStream(a_stream, std::forward<Args>(a_args)...);
}

template<typename... Args>
std::string concat(Args &&... a_args) {
    std::ostringstream s;
    addToStream(s, std::forward<Args>(a_args)...);
    return s.str();
}

/**
 * Better than system(const char *__command)
 * Bc is laggy
 * @param cmd
 * @return
 */
std::string exec(const char *cmd) {
    char buffer[128];
    std::string result = "";
    FILE *pipe = popen(concat("su -c ", cmd).c_str(), "r");
    if (!pipe) throw std::runtime_error("popen() failed!");
    try {
        while (fgets(buffer, sizeof buffer, pipe) != nullptr) {
            result += buffer;
        }
    } catch (...) {
        pclose(pipe);
        throw;
    }
    pclose(pipe);
    return result;
}

std::string ConvertJString(JNIEnv *env, jstring str) {
    if (!str) std::string();
    const jsize len = env->GetStringUTFLength(str);
    const char *strChars = env->GetStringUTFChars(str, (jboolean *) 0);
    std::string Result(strChars, len);
    env->ReleaseStringUTFChars(str, strChars);
    return Result;
}

extern "C"
JNIEXPORT jstring JNICALL
Java_com_dergoogler_fakecharger_Lib_test(JNIEnv *env, jclass clazz) {
    std::string hello = "Hello from C++";
    return env->NewStringUTF(hello.c_str());
}

extern "C"
JNIEXPORT void JNICALL
Java_com_dergoogler_fakecharger_Lib_exec(JNIEnv *env, jclass clazz, jstring command) {
    std::string _command_ = ConvertJString(env, command);
    exec(_command_.c_str());
}

extern "C"
JNIEXPORT void JNICALL
Java_com_dergoogler_fakecharger_Lib_requestRoot(JNIEnv *env, jclass clazz) {
    exec("/system/bin/su");
}

extern "C"
JNIEXPORT jstring JNICALL
Java_com_dergoogler_fakecharger_Lib_execResult(JNIEnv *env, jclass clazz, jstring command) {
    std::string _command_ = ConvertJString(env, command);
    std::string result = exec(_command_.c_str());
    return env->NewStringUTF(result.c_str());
}

extern "C"
JNIEXPORT jstring JNICALL
Java_com_dergoogler_fakecharger_Lib_indexFile(JNIEnv *env, jclass clazz) {
    std::string result = "file:///android_asset/index.html";
    return env->NewStringUTF(result.c_str());
}

extern "C"
JNIEXPORT jstring JNICALL
Java_com_dergoogler_fakecharger_Lib_interfaceName(JNIEnv *env, jclass clazz) {
    std::string result = "Android";
    return env->NewStringUTF(result.c_str());
}
