<script>
    // 색상 설정
    const primaryColor = '#3a6186';
    const secondaryColor = '#89253e';
    const successColor = '#28a745';
    const warningColor = '#ffc107';
    const lightBg = 'rgba(58, 97, 134, 0.1)';
    
    // 도넛 차트 공통 옵션
    const doughnutOptions = {
        cutout: '70%',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        }
    };

    // KPI 차트들
    new Chart(document.getElementById('complianceChart'), {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [87, 13],
                backgroundColor: [primaryColor, '#e9ecef']
            }]
        },
        options: doughnutOptions
    });

    new Chart(document.getElementById('errorPreventionChart'), {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [60, 40], // 42건을 퍼센트로 가정하여 조정
                backgroundColor: [secondaryColor, '#e9ecef']
            }]
        },
        options: doughnutOptions
    });

    new Chart(document.getElementById('selfCheckChart'), {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [93, 7],
                backgroundColor: [primaryColor, '#e9ecef']
            }]
        },
        options: doughnutOptions
    });

    new Chart(document.getElementById('errorReductionChart'), {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [35, 65],
                backgroundColor: [secondaryColor, '#e9ecef']
            }]
        },
        options: doughnutOptions
    });

    // 추진 배경 및 목적 차트 (주요 목표 중요도 시각화)
    new Chart(document.getElementById('objectivesChart'), {
        type: 'bar',
        data: {
            labels: ['회계 사고 감소', '행정 실수 방지', '책임감 유도'],
            datasets: [{
                label: '중요도',
                data: [80, 70, 90], // 가정된 중요도 점수
                backgroundColor: primaryColor
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    // K-에듀파인 시스템 차트 (시스템 사용률 추이 가정)
    new Chart(document.getElementById('eduFineChart'), {
        type: 'line',
        data: {
            labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
            datasets: [{
                label: '시스템 사용률',
                data: [65, 59, 80, 81, 56, 55], // 예시 데이터
                borderColor: primaryColor,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // 자기진단 대상 차트 (영역별 분포)
    new Chart(document.getElementById('selfCheckTargetChart'), {
        type: 'pie',
        data: {
            labels: ['인사', '학생복지', '민간위탁', '보조금', '업무추진비', '개인정보보호', '정보공개'],
            datasets: [{
                data: [15, 15, 15, 15, 10, 10, 10], // 가정된 비율
                backgroundColor: [primaryColor, secondaryColor, successColor, warningColor, '#17a2b8', '#6c757d', '#343a40']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // 자율적 내부통제 위원회 차트 (구성 인원)
    new Chart(document.getElementById('committeeChart'), {
        type: 'bar',
        data: {
            labels: ['위원장', '위원'],
            datasets: [{
                label: '인원',
                data: [1, 7], // 총 8명 중 위원장 1명, 위원 7명
                backgroundColor: [primaryColor, secondaryColor]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // 실무위원회 차트 (구성 인원)
    new Chart(document.getElementById('workingCommitteeChart'), {
        type: 'bar',
        data: {
            labels: ['위원장', '위원'],
            datasets: [{
                label: '인원',
                data: [1, 7], // 총 8명 중 위원장 1명, 위원 7명
                backgroundColor: [primaryColor, secondaryColor]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // 추진 일정 차트 (과제별 진행 상태)
    new Chart(document.getElementById('timelineChart'), {
        type: 'bar',
        data: {
            labels: ['일상경비 점검', '자기진단 평가', '업무추진비 진단', '정보공개 점검', '감사관 확인'],
            datasets: [{
                label: '진행 상태 (%)',
                data: [100, 50, 75, 60, 0], // 테이블 상태 기반 가정
                backgroundColor: primaryColor
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    // 결과 제출 타임라인 차트 (제출률 추이 가정)
    new Chart(document.getElementById('submissionTimelineChart'), {
        type: 'line',
        data: {
            labels: ['2월', '3월', '4월', '5월', '6월'],
            datasets: [{
                label: '제출률 (%)',
                data: [20, 40, 60, 80, 100], // 점진적 증가 가정
                borderColor: successColor,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // 기대 효과: 효율성 차트 (현재 vs 목표 비교)
    new Chart(document.getElementById('efficiencyChart'), {
        type: 'radar',
        data: {
            labels: ['속도', '정확성', '자동화'],
            datasets: [{
                label: '현재',
                data: [65, 59, 70],
                backgroundColor: 'rgba(58, 97, 134, 0.2)',
                borderColor: primaryColor
            }, {
                label: '목표',
                data: [85, 90, 95],
                backgroundColor: 'rgba(137, 37, 62, 0.2)',
                borderColor: secondaryColor
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // 기대 효과: 투명성 차트 (현재 vs 목표)
    new Chart(document.getElementById('transparencyChart'), {
        type: 'bar',
        data: {
            labels: ['정보 공개', '프로세스 명확성'],
            datasets: [{
                label: '현재',
                data: [70, 65],
                backgroundColor: primaryColor
            }, {
                label: '목표',
                data: [90, 85],
                backgroundColor: secondaryColor
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    // 기대 효과: 책임성 차트 (현재 vs 목표)
    new Chart(document.getElementById('accountabilityChart'), {
        type: 'bar',
        data: {
            labels: ['책임 추적', '성과 평가'],
            datasets: [{
                label: '현재',
                data: [60, 55],
                backgroundColor: primaryColor
            }, {
                label: '목표',
                data: [85, 80],
                backgroundColor: secondaryColor
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
</script> 